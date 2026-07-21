import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/helpStyles";

export default function ContactCard({ icon, title, value, subtitle }) {
  return (
    <View style={styles.contactCard}>
      <View style={styles.contactIcon}>
        <Ionicons name={icon} size={24} color="#2563EB" />
      </View>

      <View style={styles.contactContent}>
        <Text style={styles.contactTitle}>{title}</Text>

        <Text style={styles.contactValue}>{value}</Text>

        {subtitle && <Text style={styles.contactSubtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}
