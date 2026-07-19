import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",

    title: "Find trusted experts near you",

    description:
      "From repairs to home services, connect with verified professionals in your area.",

    // image: require("./assets/onboarding1.png"),
  },

  {
    id: "2",

    title: "Book services with confidence",

    description:
      "Compare ratings, reviews and prices. Hire the right professional in minutes.",

    // image: require("./assets/onboarding2.png"),
  },
];

const Onboarding = ({ navigation }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current === 1) {
      navigation.replace("Auth");
    } else {
      setCurrent(1);
    }
  };

  return (
    <LinearGradient colors={["#2563EB", "#60A5FA"]} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <TouchableOpacity
          style={styles.skip}
          onPress={() => navigation.replace("Auth")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* IMAGE */}

        <View style={styles.imageBox}>
          <Image source={slides[current].image} style={styles.image} />
        </View>

        {/* WHITE CARD */}

        <View style={styles.card}>
          <Text style={styles.title}>{slides[current].title}</Text>

          <Text style={styles.description}>{slides[current].description}</Text>

          <View style={styles.bottom}>
            <View style={styles.pagination}>
              <View style={[styles.dot, current === 0 && styles.activeDot]} />

              <View style={[styles.dot, current === 1 && styles.activeDot]} />
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.85}
              onPress={next}
            >
              <Text style={styles.buttonText}>
                {current === 0 ? "Next" : "Get Started"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Onboarding;
