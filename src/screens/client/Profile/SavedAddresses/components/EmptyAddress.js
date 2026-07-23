import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/addressStyles";

export default function EmptyAddress({ onPress }) {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIcon}>
        <Ionicons name="location-outline" size={42} color="#2563EB" />
      </View>

      <Text style={styles.emptyTitle}>No Saved Addresses</Text>

      <Text style={styles.emptySubtitle}>
        Save your frequently used locations to book professionals faster.
      </Text>

      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Ionicons name="add" size={20} color="#FFF" />

        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
}
