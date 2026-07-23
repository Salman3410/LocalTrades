import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/bookingConfirmationStyles";

export default function BookingConfirmationScreen({ route, navigation }) {
  const { worker, service, date, time, address, description } = route.params;

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

        <Text style={styles.headerTitle}>Confirm Booking</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.card}>
          <Text style={styles.workerName}>{worker.name}</Text>

          <Text style={styles.profession}>{worker.profession}</Text>
        </View>

        <View style={styles.card}>
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

        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Estimated Price</Text>

          <Text style={styles.price}>Rs {worker.price}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("BookingSuccess")}
        >
          <Text style={styles.buttonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
