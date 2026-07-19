import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import PagerView from "react-native-pager-view";

import styles from "./styles";

const { width } = Dimensions.get("window");

const data = [
  {
    title: "Find Skilled Professionals",
    description:
      "Connect with trusted electricians, plumbers, painters, cleaners and more.",
    emoji: "👷",
  },
  {
    title: "Book Easily",
    description:
      "Choose date, compare ratings and hire the best worker nearby.",
    emoji: "📅",
  },
  {
    title: "Safe & Trusted",
    description: "Verified workers, secure bookings and transparent reviews.",
    emoji: "⭐",
  },
];

const Onboarding = ({ navigation }) => {
  const pagerRef = useRef(null);

  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 2) {
      pagerRef.current.setPage(page + 1);
    } else {
      navigation.replace("Auth");
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.page}>
            <Text style={styles.emoji}>{item.emoji}</Text>

            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </PagerView>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.replace("Auth")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, page === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity onPress={nextPage}>
          <Text style={styles.next}>{page === 2 ? "Get Started" : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
