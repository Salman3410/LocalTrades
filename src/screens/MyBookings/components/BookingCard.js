import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/myBookingsStyles";

export default function BookingCard({ booking }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={28} color="#2563EB" />
      </View>

      <View style={styles.info}>
        <Text style={styles.worker}>{booking.worker}</Text>

        <Text style={styles.profession}>{booking.profession}</Text>

        <Text style={styles.date}>
          {booking.date} • {booking.time}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>Rs {booking.price}</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.status}>{booking.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
