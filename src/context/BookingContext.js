import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import availabilityData from "../data/availabilityData";
const BookingContext = createContext();

const STORAGE_KEY = "@bookings";

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [draftBooking, setDraftBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [availability, setAvailability] = useState(availabilityData);

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }
  }, [bookings, loading]);

  const loadBookings = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);

      if (data) {
        setBookings(JSON.parse(data));
      }
    } catch (error) {
      console.log("BookingContext Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helpers
  const generateBookingId = () => {
    const now = new Date();

    const date =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0");

    const random = Math.floor(100000 + Math.random() * 900000);

    return `BK-${date}-${random}`;
  };

  // Draft Booking
  const updateDraftBooking = (data) => {
    setDraftBooking((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const clearDraftBooking = () => {
    setDraftBooking(null);
  };

  // Create Booking
  const createBooking = async () => {
    if (!draftBooking) return;

    const now = new Date().toISOString();

    const booking = {
      // Local Storage ID
      id: Date.now().toString(),

      // Public Booking ID
      bookingId: generateBookingId(),

      // Status
      status: "Upcoming",

      createdAt: now,
      updatedAt: now,

      // Client
      client: {
        id: draftBooking.client?.id || null,
        name: draftBooking.client?.name || "",
        phone: draftBooking.client?.phone || "",
        email: draftBooking.client?.email || "",
      },

      // Worker
      worker: {
        id: draftBooking.worker.id,
        name: draftBooking.worker.name,
        profession: draftBooking.worker.profession,
        rating: draftBooking.worker.rating,
        location: draftBooking.worker.location,
        price: draftBooking.worker.price,
      },

      // Provider
      provider: {
        id: draftBooking.worker.id,
        accepted: false,
        started: false,
        completed: false,
      },

      // Service
      service: draftBooking.service,
      description: draftBooking.description,

      // Schedule
      schedule: {
        date: draftBooking.date,
        time: draftBooking.time,
      },

      // Backward Compatibility
      date: draftBooking.date,
      time: draftBooking.time,

      // Address
      address: {
        fullAddress: draftBooking.address,
        latitude: null,
        longitude: null,
      },

      // Backward Compatibility
      addressText: draftBooking.address,

      // Payment
      payment: {
        amount: draftBooking.worker.price,
        method: draftBooking.payment?.method || "Cash",
        status: "Pending",
        currency: "PKR",
        transactionId: null,
        paidAt: null,
      },

      // Review
      review: {
        given: false,
        rating: null,
        comment: "",
      },

      // Cancellation
      cancelledBy: null,
      cancelReason: "",

      // Provider Flags
      providerAccepted: false,
      providerStarted: false,
      providerCompleted: false,
    };

    // Update state
    const updatedBookings = [booking, ...bookings];

    setBookings(updatedBookings);

    // Save to AsyncStorage
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));

    // Remove selected slot from availability
    bookTimeSlot(draftBooking.worker.id, draftBooking.time);

    // Clear draft booking
    clearDraftBooking();

    // Return created booking
    return booking;
  };

  // Cancel Booking
  const cancelBooking = (id, cancelledBy = "client") => {
    const booking = bookings.find((b) => b.id === id);

    if (!booking) return;

    releaseTimeSlot(booking.worker.id, booking.time);

    setBookings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Cancelled",
              cancelledBy,
              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    );
  };

  // Complete Booking
  const completeBooking = (id) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              status: "Completed",

              updatedAt: new Date().toISOString(),

              providerCompleted: true,

              payment: {
                ...item.payment,

                status: "Paid",

                paidAt: new Date().toISOString(),
              },
            }
          : item,
      ),
    );
  };

  // Reschedule
  const rescheduleBooking = (id, date, time) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              schedule: {
                date,
                time,
              },

              date,

              time,

              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    );
  };

  // Update Booking
  const updateBooking = (id, data) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              ...data,

              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    );
  };

  // Delete
  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((item) => item.id !== id));
  };

  // Get Booking
  const getBooking = (id) => {
    return bookings.find((item) => item.id === id);
  };

  // Filters
  const upcomingBookings = bookings.filter(
    (item) => item.status === "Upcoming",
  );

  const completedBookings = bookings.filter(
    (item) => item.status === "Completed",
  );

  const cancelledBookings = bookings.filter(
    (item) => item.status === "Cancelled",
  );

  // ----------------------------------
  // Availability
  // ----------------------------------

  const getAvailableSlots = (workerId) => {
    return availability[workerId]?.availableSlots || [];
  };

  const bookTimeSlot = (workerId, slot) => {
    setAvailability((prev) => {
      const workerAvailability = prev[workerId];

      if (!workerAvailability) return prev;

      return {
        ...prev,

        [workerId]: {
          ...workerAvailability,

          availableSlots: workerAvailability.availableSlots.filter(
            (time) => time !== slot,
          ),
        },
      };
    });
  };

  const releaseTimeSlot = (workerId, slot) => {
    setAvailability((prev) => {
      const workerAvailability = prev[workerId];

      if (!workerAvailability) return prev;

      if (workerAvailability.availableSlots.includes(slot)) {
        return prev;
      }

      return {
        ...prev,

        [workerId]: {
          ...workerAvailability,

          availableSlots: [...workerAvailability.availableSlots, slot].sort(),
        },
      };
    });
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        loading,
        draftBooking,
        updateDraftBooking,
        clearDraftBooking,
        createBooking,
        cancelBooking,
        completeBooking,
        rescheduleBooking,
        updateBooking,
        removeBooking,
        getBooking,
        upcomingBookings,
        completedBookings,
        cancelledBookings,
        releaseTimeSlot
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};;

export default BookingContext;
