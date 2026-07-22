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
      activeOpacity={0.85}
      onPress={onPress}
    >
      {/* Avatar */}

      <View style={styles.avatar}>
        <Ionicons name="person" size={28} color="#2563EB" />
      </View>

      {/* Info */}

      <View style={styles.info}>
        <Text style={styles.name}>{worker.name}</Text>

        <Text style={styles.profession}>{worker.profession}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FBBF24" />

          <Text style={styles.rating}>{worker.rating}</Text>

          <Text style={styles.jobs}>• {worker.jobs || 100}+ jobs</Text>
        </View>

        {worker.location && (
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={13} color="#888" />{" "}
            {worker.location}
          </Text>
        )}
      </View>

      {/* Right */}

      <View style={styles.right}>
        <TouchableOpacity onPress={() => toggleFavorite(worker)}>
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={24}
            color={favorite ? "#EF4444" : "#9CA3AF"}
          />
        </TouchableOpacity>

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

        <Text style={styles.price}>Rs {worker.price}</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default WorkerCard;
