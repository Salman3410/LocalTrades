import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles/workerDetailsStyles";
import useFavorites from "../../../hooks/useFavorites";

export default function WorkerDetailsScreen({ route, navigation }) {
  const { worker } = route.params;
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(worker.id);

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => toggleFavorite(worker)}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={22}
            color={favorite ? "#EF4444" : "#111827"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile */}

        <View style={styles.profileSection}>
          <View style={styles.imageBox}>
            <Text style={styles.avatar}>👤</Text>
          </View>

          <Text style={styles.name}>{worker.name}</Text>

          <Text style={styles.profession}>{worker.profession}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={18} color="#FFB800" />

            <Text style={styles.rating}>{worker.rating} Rating</Text>
          </View>

          <Text style={styles.location}>📍 {worker.location}</Text>
        </View>

        {/* About */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <Text style={styles.description}>
            Experienced {worker.profession} professional with{" "}
            {worker.experience} of experience. Providing quality service to
            customers.
          </Text>
        </View>

        {/* Services */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>

          <View style={styles.serviceBox}>
            <Text>✓ {worker.profession}</Text>

            <Text>✓ Installation</Text>

            <Text>✓ Maintenance</Text>
          </View>
        </View>

        {/* Stats */}

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>5+</Text>

            <Text>Experience</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>100+</Text>

            <Text>Jobs</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>{worker.rating}</Text>

            <Text>Rating</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() =>
          navigation.navigate("Booking", {
            worker,
          })
        }
      >
        <Text style={styles.bookText}>Book Service</Text>
      </TouchableOpacity>
    </View>
  );
}
