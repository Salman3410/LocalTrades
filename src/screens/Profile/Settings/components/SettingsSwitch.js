import React from "react";
import { View, Text, Switch } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/settingsStyles";

export default function SettingsSwitch({
  icon,
  title,
  subtitle,
  value,
  onValueChange,
}) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#2563EB" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>{title}</Text>

          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#D1D5DB",
          true: "#2563EB",
        }}
        thumbColor="#fff"
      />
    </View>
  );
}
