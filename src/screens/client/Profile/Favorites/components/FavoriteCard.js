import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useFavorites from "../../../../hooks/useFavorites";

import styles from "../styles/favoritesStyles";

export default function FavoriteCard({ worker, navigation }) {
  const { removeFavorite } = useFavorites();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("WorkerDetails", {
          worker,
        })
      }
    >
      <View style={styles.avatar}>
        <Ionicons name="person" size={30} color="#2563EB" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{worker.name}</Text>

        <Text style={styles.profession}>{worker.profession}</Text>

        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#FBBF24" />

          <Text style={styles.rating}>{worker.rating}</Text>

          <Text style={styles.jobs}>• {worker.jobs}+ Jobs</Text>
        </View>

        <Text style={styles.location}>{worker.location}</Text>
      </View>

      <View style={styles.right}>
        <TouchableOpacity onPress={() => removeFavorite(worker.id)}>
          <Ionicons name="heart" size={24} color="#EF4444" />
        </TouchableOpacity>

        <Text style={styles.price}>Rs {worker.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
