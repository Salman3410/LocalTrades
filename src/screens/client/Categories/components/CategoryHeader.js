import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/categoryStyles";

export default function CategoryHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Services</Text>

      <Text style={styles.headerSubtitle}>
        Find trusted professionals for every service.
      </Text>
    </View>
  );
}
