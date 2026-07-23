import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/settingsStyles";

export default function SettingsSection({ title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}
