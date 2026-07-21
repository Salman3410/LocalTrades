import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/settingsStyles";

export default function SettingsItem({ icon, title, value, onPress }) {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#2563EB" />
        </View>

        <Text style={styles.itemTitle}>{title}</Text>
      </View>

      <View style={styles.right}>
        {value ? <Text style={styles.itemValue}>{value}</Text> : null}

        <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
}
