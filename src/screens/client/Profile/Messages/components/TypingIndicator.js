import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function TypingIndicator({ worker }) {
  return (
    <View style={styles.typingWrapper}>
      <View style={styles.typingBubble}>
        <View style={styles.typingDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.typingText}>{worker} is typing...</Text>
      </View>
    </View>
  );
}
