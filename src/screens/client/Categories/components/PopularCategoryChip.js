import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/categoryStyles";

export default function PopularCategoryChip({ category, onPress }) {
  return (
    <TouchableOpacity
      style={styles.popularChip}
      activeOpacity={0.85}
      onPress={() => onPress(category.title)}
    >
      <Ionicons name={category.icon} size={16} color="#2563EB" />

      <Text style={styles.popularChipText}>{category.title}</Text>
    </TouchableOpacity>
  );
}
