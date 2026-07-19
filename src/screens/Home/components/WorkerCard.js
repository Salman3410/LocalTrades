import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/workerCardStyles";

const WorkerCard = ({ name, profession, rating, jobs, price, available }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85}>
      {/* Profile */}

      <View style={styles.topSection}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={28} color="#2563EB" />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.profession}>{profession}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={15} color="#FBBF24" />

            <Text style={styles.rating}>{rating}</Text>

            <Text style={styles.jobs}>• {jobs}+ jobs</Text>
          </View>
        </View>

        <View
          style={[
            styles.status,
            {
              backgroundColor: available ? "#DCFCE7" : "#FEE2E2",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: available ? "#16A34A" : "#DC2626",
              },
            ]}
          >
            {available ? "Available" : "Busy"}
          </Text>
        </View>
      </View>

      {/* Bottom */}

      <View style={styles.bottomSection}>
        <Text style={styles.price}>{price} / visit</Text>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default WorkerCard;
