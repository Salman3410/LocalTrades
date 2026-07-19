import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/workerListingStyles";

export default function WorkerCard({ worker, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Profile Image */}

      <View style={styles.imageContainer}>
        <Text style={styles.avatar}>👤</Text>
      </View>

      {/* Worker Information */}

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{worker.name}</Text>

          <View style={styles.status}>
            <Text style={styles.statusText}>Available</Text>
          </View>
        </View>

        <Text style={styles.profession}>{worker.profession}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={15} color="#FFB800" />

            <Text style={styles.metaText}>{worker.rating}</Text>
          </View>

          <View style={styles.dot} />

          <Text style={styles.metaText}>{worker.experience}</Text>
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={16} color="#777" />

          <Text style={styles.location}>{worker.location}</Text>
        </View>

        <Text style={styles.price}>From Rs {worker.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
