import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/bookingSuccessStyles";

export default function BookingSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="checkmark" size={70} color="#22C55E" />
      </View>

      <Text style={styles.title}>Booking Confirmed</Text>

      <Text style={styles.subtitle}>
        Your booking request has been sent successfully.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
