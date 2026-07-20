import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/bookingStyles";

const WorkerSummaryCard = ({ worker }) => {
  return (
    <View style={styles.card}>
      <View style={styles.workerRow}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        {/* Worker Info */}
        <View style={styles.workerInfo}>
          <Text style={styles.workerName}>{worker?.name}</Text>

          <Text style={styles.workerProfession}>{worker?.profession}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={15} color="#F4B400" />

            <Text style={styles.ratingText}>{worker?.rating}</Text>

            <Text style={styles.ratingText}>{"  •  "}</Text>

            <Ionicons name="location-outline" size={15} color="#777" />

            <Text style={styles.ratingText}>{worker?.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkerSummaryCard;
