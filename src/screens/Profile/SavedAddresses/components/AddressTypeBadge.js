import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/addressStyles";

export default function AddressTypeBadge({ type }) {
  let icon = "location-outline";

  switch (type) {
    case "Home":
      icon = "home-outline";
      break;

    case "Work":
      icon = "briefcase-outline";
      break;

    default:
      icon = "location-outline";
  }

  return (
    <View style={styles.typeBadge}>
      <Ionicons name={icon} size={15} color="#2563EB" />

      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
}
