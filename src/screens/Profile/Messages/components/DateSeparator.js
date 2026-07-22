import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/messageStyles";

export default function DateSeparator({ title }) {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.dateLine} />

      <Text style={styles.dateText}>{title}</Text>

      <View style={styles.dateLine} />
    </View>
  );
}
