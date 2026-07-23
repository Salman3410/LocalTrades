import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/bookingStyles";

const ServiceDropdown = ({ value, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.dropdown}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.dropdownText}>{value || "Select Service"}</Text>

      <Ionicons name="chevron-down" size={20} color="#777" />
    </TouchableOpacity>
  );
};

export default ServiceDropdown;
