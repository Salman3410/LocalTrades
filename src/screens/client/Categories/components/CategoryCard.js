import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/categoryStyles";

export default function CategoryCard({ category, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.categoryCard}
      onPress={() => onPress(category.title)}
    >
      {/* Left Icon */}

      <View style={styles.categoryIcon}>
        <Ionicons name={category.icon} size={26} color="#2563EB" />
      </View>

      {/* Middle */}

      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{category.title}</Text>

        <Text style={styles.categoryDescription} numberOfLines={2}>
          {category.description}
        </Text>

        <View style={styles.workerRow}>
          <Ionicons name="people-outline" size={14} color="#64748B" />

          <Text style={styles.workerCount}>
            {category.workers} Professionals
          </Text>
        </View>
      </View>

      {/* Arrow */}

      <Ionicons name="chevron-forward" size={22} color="#CBD5E1" />
    </TouchableOpacity>
  );
}
