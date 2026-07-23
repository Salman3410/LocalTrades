import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/searchStyles";

export default function RecentSearchItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.recentItem} onPress={onPress}>
      <Ionicons name="time-outline" size={18} color="#666" />
      <Text style={styles.recentText}>{title}</Text>
    </TouchableOpacity>
  );
}
