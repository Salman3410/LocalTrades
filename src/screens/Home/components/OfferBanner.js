import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/bannerStyles";

const OfferBanner = () => {
  return (
    <View style={styles.container}>
      {/* Left Side */}

      <View style={styles.left}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>VERIFIED</Text>
        </View>

        <Text style={styles.title}>Need help today?</Text>

        <Text style={styles.subtitle}>
          Book trusted professionals near you in just a few taps.
        </Text>

        <TouchableOpacity activeOpacity={0.85} style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>

          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Right Side */}

      <View style={styles.iconContainer}>
        <Ionicons name="construct" size={70} color="#2563EB" />
      </View>
    </View>
  );
};

export default OfferBanner;
