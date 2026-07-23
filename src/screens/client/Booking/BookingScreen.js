import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import WorkerSummaryCard from "./components/WorkerSummaryCard";
import ServiceDropdown from "./components/ServiceDropdown";
import DateSelector from "./components/DateSelector";
import TimeSlotSelector from "./components/TimeSlotSelector";

import useBookings from "../../../hooks/useBooking";
import useAuth from "../../../hooks/useAuth";

import styles from "./styles/bookingStyles";

export default function BookingScreen({ route, navigation }) {
  const { worker } = route.params;

  const { updateDraftBooking, getAvailableSlots } = useBookings();

  const { user } = useAuth();

  const [selectedService, setSelectedService] = useState(worker.profession);

  const [selectedDate, setSelectedDate] = useState("Today");

  const [selectedTime, setSelectedTime] = useState("");

  const [address, setAddress] = useState("");

  const [description, setDescription] = useState("");

  const availableSlots = getAvailableSlots(worker.id);

  const validateForm = () => {
    if (!selectedService) {
      Alert.alert("Service Required", "Please select a service.");
      return false;
    }

    if (!selectedDate) {
      Alert.alert("Date Required", "Please select a booking date.");
      return false;
    }

    if (!selectedTime) {
      Alert.alert("Time Required", "Please select an available time slot.");
      return false;
    }

    if (!address.trim()) {
      Alert.alert("Address Required", "Please enter your service address.");
      return false;
    }

    if (address.trim().length < 10) {
      Alert.alert("Invalid Address", "Please enter a complete address.");
      return false;
    }

    if (!description.trim()) {
      Alert.alert("Problem Required", "Please describe your problem.");
      return false;
    }

    if (description.trim().length < 15) {
      Alert.alert(
        "Description Too Short",
        "Please provide a little more detail.",
      );
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (!validateForm()) return;

    updateDraftBooking({
      client: {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        phone: user?.phone || "",
      },

      worker,

      provider: {
        id: worker.id,
        name: worker.name,
      },

      service: selectedService,

      description: description.trim(),

      date: selectedDate,

      time: selectedTime,

      address: address.trim(),

      estimatedPrice: worker.price,

      paymentMethod: "Cash",

      payment: {
        amount: worker.price,
        method: "Cash",
        status: "Pending",
        currency: "PKR",
      },
    });

    navigation.navigate("BookingConfirmation");
  };

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Book Service</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Worker */}

        <WorkerSummaryCard worker={worker} />

        {/* Service */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service</Text>

          <ServiceDropdown
            value={selectedService}
            onPress={() => {
              // Bottom sheet later
            }}
          />
        </View>

        {/* Date */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>

          <DateSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>

        {/* Time */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time</Text>

          <TimeSlotSelector
            slots={availableSlots}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </View>

        {/* Address */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter complete address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Description */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Describe Your Problem</Text>

          <TextInput
            style={styles.textArea}
            multiline
            value={description}
            onChangeText={setDescription}
            placeholder="Example: My AC is leaking water and not cooling properly..."
          />
        </View>

        {/* Price */}

        <View style={styles.section}>
          <View style={styles.priceCard}>
            <View>
              <Text style={styles.priceLabel}>Estimated Starting Price</Text>

              <Text style={styles.priceValue}>Rs {worker.price}</Text>
            </View>

            <Ionicons name="cash-outline" size={32} color="#111" />
          </View>
        </View>
      </ScrollView>

      {/* Continue */}

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
