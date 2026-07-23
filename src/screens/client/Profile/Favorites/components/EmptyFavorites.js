import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/favoritesStyles";

export default function EmptyFavorites() {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="heart-outline" size={70} color="#CBD5E1" />

      <Text style={styles.emptyTitle}>No Favorites Yet</Text>

      <Text style={styles.emptySubtitle}>
        Save professionals here for quick access later.
      </Text>
    </View>
  );
}
