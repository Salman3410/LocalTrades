import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useBookings from "../../../hooks/useBooking";

import styles from "./styles/bookingConfirmationStyles";

export default function BookingConfirmationScreen({ navigation }) {
  const { draftBooking, createBooking } = useBookings();

  useEffect(() => {
    if (!draftBooking) {
      Alert.alert("Booking Expired", "Please create a booking again.");

      navigation.goBack();
    }
  }, []);

  if (!draftBooking) return null;

  const {
    worker,
    provider,
    client,
    service,
    date,
    time,
    address,
    description,
    estimatedPrice,
    payment,
  } = draftBooking;

  const handleConfirmBooking = async () => {
    await createBooking();

    navigation.replace("BookingSuccess");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Confirm Booking</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.card}>
          <Text style={styles.workerName}>{worker.name}</Text>

          <Text style={styles.profession}>{worker.profession}</Text>

          <Text style={styles.value}>Provider: {provider.name}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Client</Text>

          <Text style={styles.value}>{client.name}</Text>

          <Text style={styles.label}>Service</Text>

          <Text style={styles.value}>{service}</Text>

          <Text style={styles.label}>Date</Text>

          <Text style={styles.value}>{date}</Text>

          <Text style={styles.label}>Time</Text>

          <Text style={styles.value}>{time}</Text>

          <Text style={styles.label}>Address</Text>

          <Text style={styles.value}>{address}</Text>

          <Text style={styles.label}>Problem</Text>

          <Text style={styles.value}>{description}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Payment Method</Text>

          <Text style={styles.value}>{payment.method}</Text>

          <Text style={styles.label}>Payment Status</Text>

          <Text style={styles.value}>{payment.status}</Text>
        </View>

        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Estimated Price</Text>

          <Text style={styles.price}>Rs {estimatedPrice}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
          <Text style={styles.buttonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
