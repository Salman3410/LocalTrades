import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/settingsStyles";

export default function DangerButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.dangerButton}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name="trash-outline" size={20} color="#DC2626" />

      <Text style={styles.dangerText}>{title}</Text>
    </TouchableOpacity>
  );
}
