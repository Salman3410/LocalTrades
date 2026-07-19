import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/emergencyStyles";

const EmergencyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="warning" size={28} color="#DC2626" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Emergency Service</Text>

        <Text style={styles.text}>
          Need urgent repair? Find available professionals now.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmergencyCard;
