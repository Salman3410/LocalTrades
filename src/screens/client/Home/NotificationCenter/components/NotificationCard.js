import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/notificationCenterStyles";

export default function NotificationCard({ notification, onPress, onDelete }) {
  const getIcon = () => {
    switch (notification.type) {
      case "booking":
        return {
          name: "calendar",
          color: "#2563EB",
        };

      case "message":
        return {
          name: "chatbubble",
          color: "#16A34A",
        };

      case "payment":
        return {
          name: "card",
          color: "#7C3AED",
        };

      case "offer":
        return {
          name: "gift",
          color: "#EC4899",
        };

      case "reminder":
        return {
          name: "alarm",
          color: "#F59E0B",
        };

      case "worker":
        return {
          name: "checkmark-circle",
          color: "#10B981",
        };

      case "cancel":
        return {
          name: "close-circle",
          color: "#EF4444",
        };

      default:
        return {
          name: "notifications",
          color: "#2563EB",
        };
    }
  };

  const icon = getIcon();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, !notification.read && styles.unreadCard]}
    >
      {/* Icon */}

      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${icon.color}15`,
          },
        ]}
      >
        <Ionicons name={icon.name} size={22} color={icon.color} />
      </View>

      {/* Content */}

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text numberOfLines={1} style={styles.title}>
            {notification.title}
          </Text>

          <Text style={styles.time}>{notification.time}</Text>
        </View>

        <Text numberOfLines={2} style={styles.message}>
          {notification.message}
        </Text>
      </View>

      {/* Right */}

      <View style={styles.right}>
        {!notification.read && <View style={styles.unreadDot} />}

        <TouchableOpacity
          onPress={onDelete}
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <Ionicons name="trash-outline" size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
