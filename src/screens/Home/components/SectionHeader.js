import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/sectionHeaderStyles";

const SectionHeader = ({ title, onPress, showSeeAll = true }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {showSeeAll && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>See All</Text>

          <Ionicons name="chevron-forward" size={16} color="#2563EB" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
