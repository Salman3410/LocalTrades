import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/headerStyles";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}

      <View style={styles.topRow}>
        <TouchableOpacity style={styles.locationContainer}>
          <Ionicons name="location" size={18} color="#2563EB" />

          <Text style={styles.location}>Lahore, Pakistan</Text>

          <Ionicons name="chevron-down" size={16} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => navigation.navigate("NotificationCenter")}
        >
          <Ionicons name="notifications-outline" size={22} color="#111827" />

          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Greeting */}

      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good Morning 👋</Text>

        <Text style={styles.username}>Find your trusted professional</Text>
      </View>
    </View>
  );
};

export default Header;
