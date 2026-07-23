import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useFavorites from "../../hooks/useFavorites";
import styles from "./workerCardStyles";
 
const WorkerCard = ({ worker, onPress, compact = false }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
 
  const favorite = isFavorite(worker.id);

  return (  
    <TouchableOpacity
      style={[styles.card, compact && styles.compactCard]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* Avatar */}

      <View style={styles.avatar}>
        <Ionicons name="person" size={28} color="#2563EB" />
      </View>

      {/* Worker Info */}

      <View style={styles.info}>
        <Text style={styles.name}>{worker.name}</Text>

        <Text style={styles.profession}>{worker.profession}</Text>

        {/* Availability */}

        <View
          style={[
            styles.badge,
            {
              backgroundColor: worker.available ? "#EAF8EF" : "#FDECEC",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: worker.available ? "#16A34A" : "#DC2626",
              },
            ]}
          >
            {worker.available ? "Available" : "Busy"}
          </Text>
        </View>

        {/* Rating */}

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FBBF24" />

          <Text style={styles.rating}>{worker.rating}</Text>

          <Text style={styles.jobs}>• {worker.jobs || 100}+ Jobs</Text>
        </View>

        {/* Location */}

        {worker.location && (
          <View style={styles.ratingRow}>
            <Ionicons name="location-outline" size={13} color="#94A3B8" />

            <Text style={styles.location}>{worker.location}</Text>
          </View>
        )}
      </View>

      {/* Right Section */}

      <View style={styles.right}>
        {/* Favorite */}

        <TouchableOpacity
          onPress={() => toggleFavorite(worker)}
          activeOpacity={0.8}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={22}
            color={favorite ? "#EF4444" : "#94A3B8"}
          />
        </TouchableOpacity>

        <View style={styles.bottomRight}>
          <Text style={styles.price}>Rs {worker.price}</Text>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkerCard;
