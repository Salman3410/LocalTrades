import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/helpStyles";

export default function FAQItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.faqCard}>
      <TouchableOpacity
        style={styles.faqHeader}
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.faqQuestion}>{question}</Text>

        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="#2563EB"
        />
      </TouchableOpacity>

      {expanded && <Text style={styles.faqAnswer}>{answer}</Text>}
    </View>
  );
}
