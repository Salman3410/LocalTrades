import React from "react";
import { View, Text, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/notificationStyles";

export default function NotificationItem({
  icon,
  title,
  subtitle,
  value,
  onValueChange,
}) {
  return (
    <View style={styles.item}>
      {/* Left */}

      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={22} color="#2563EB" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Right */}

      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor="#FFFFFF"
        trackColor={{
          false: "#D1D5DB",
          true: "#2563EB",
        }}
      />
    </View>
  );
}
