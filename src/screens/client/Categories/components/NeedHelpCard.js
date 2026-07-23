import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/categoryStyles";

export default function NeedHelpCard({ navigation }) {
  return (
    <View style={styles.helpCard}>
      <View style={styles.helpLeft}>
        <View style={styles.helpIcon}>
          <Ionicons name="construct-outline" size={28} color="#2563EB" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.helpTitle}>Can't find your service?</Text>

          <Text style={styles.helpSubtitle}>
            Browse all available professionals near your location.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.helpButton}
        onPress={() => navigation.navigate("WorkerListing")}
      >
        <Text style={styles.helpButtonText}>Browse All</Text>

        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
