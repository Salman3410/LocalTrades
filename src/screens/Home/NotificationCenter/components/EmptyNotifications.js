import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/notificationCenterStyles";

export default function EmptyNotifications() {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="notifications-off-outline" size={72} color="#CBD5E1" />

      <Text style={styles.emptyTitle}>No Notifications</Text>

      <Text style={styles.emptySubtitle}>
        You're all caught up.
        {"\n\n"}
        We'll notify you about bookings, messages and offers here.
      </Text>
    </View>
  );
}
