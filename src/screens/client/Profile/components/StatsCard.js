import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/profileStyles";

export default function StatsCard({ value, label, color = "#2563EB" }) {
  return (
    <View style={styles.statsCard}>
      <Text
        style={[
          styles.statsValue,
          {
            color,
          },
        ]}
      >
        {value}
      </Text>

      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );
}
