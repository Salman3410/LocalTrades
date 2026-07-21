import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/profileStyles";

export default function MenuItem({ icon, title, badge, onPress,navigation }) {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.65}
      onPress={onPress}
    >
      {/* Left */}

      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={21} color="#4B5563" />

        <Text style={styles.menuTitle}>{title}</Text>
      </View>

      {/* Right */}

      <View style={styles.menuRight}>
        {badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ) : null}

        <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
}
