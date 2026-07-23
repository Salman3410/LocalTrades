import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/myBookingsStyles";
import useBookings from "../../../../hooks/useBooking";

export default function BookingCard({ booking, navigation }) {
  const { cancelBooking } = useBookings();

  const handleCancel = () => {
    cancelBooking(booking.id);
  };

  const handleBookAgain = () => {
    navigation.navigate("WorkerDetails", {
      worker: booking.worker,
    });
  };

  const handleReview = () => {
    navigation.navigate("Reviews", {
      booking,
    });
  };

  const statusColor = {
    Upcoming: "#2563EB",
    Completed: "#16A34A",
    Cancelled: "#DC2626",
  };

  return (
    <View style={styles.bookingCard}>
      {/* Header */}

      <View style={styles.bookingHeader}>
        <View>
          <Text style={styles.workerName}>{booking.worker.name}</Text>

          <Text style={styles.profession}>{booking.worker.profession}</Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: statusColor[booking.status] + "15",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: statusColor[booking.status],
              },
            ]}
          >
            {booking.status}
          </Text>
        </View>
      </View>

      {/* Date */}

      <View style={styles.bookingInfo}>
        <Ionicons name="calendar-outline" size={16} color="#64748B" />

        <Text style={styles.infoText}>{booking.date}</Text>
      </View>

      {/* Time */}

      <View style={styles.bookingInfo}>
        <Ionicons name="time-outline" size={16} color="#64748B" />

        <Text style={styles.infoText}>{booking.time || "To be confirmed"}</Text>
      </View>

      {/* Address */}

      <View style={styles.bookingInfo}>
        <Ionicons name="location-outline" size={16} color="#64748B" />

        <Text style={styles.infoText}>{booking.address}</Text>
      </View>

      {/* Price */}

      <Text style={styles.price}>Rs {booking.worker.price}</Text>

      {/* Actions */}

      <View style={styles.actionRow}>
        {booking.status === "Upcoming" && (
          <>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={handleCancel}
            >
              <Text style={styles.outlineButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleBookAgain}
            >
              <Text style={styles.primaryButtonText}>View Worker</Text>
            </TouchableOpacity>
          </>
        )}

        {booking.status === "Completed" && (
          <>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={handleReview}
            >
              <Text style={styles.outlineButtonText}>Review</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleBookAgain}
            >
              <Text style={styles.primaryButtonText}>Book Again</Text>
            </TouchableOpacity>
          </>
        )}

        {booking.status === "Cancelled" && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleBookAgain}
          >
            <Text style={styles.primaryButtonText}>Book Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
