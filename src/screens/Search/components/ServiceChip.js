import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/searchStyles";

export default function ServiceChip({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.chip} onPress={onPress}>
      <Text style={styles.chipText}>{title}</Text>
    </TouchableOpacity>
  );
}
