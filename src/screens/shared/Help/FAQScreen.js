import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FAQItem from "./components/FAQItem";
import styles from "./styles/helpStyles";

const faq = [
  {
    id: 1,
    question: "How do I book a professional?",
    answer:
      "Open a professional profile, choose your preferred date and time, then confirm your booking.",
  },

  {
    id: 2,
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel any upcoming booking from the My Bookings section before the service starts.",
  },

  {
    id: 3,
    question: "How do I reschedule a booking?",
    answer:
      "Open your booking details and tap Reschedule to choose another available time slot.",
  },

  {
    id: 4,
    question: "How do I contact a worker?",
    answer:
      "After confirming a booking, you'll be able to chat directly with the professional.",
  },

  {
    id: 5,
    question: "Is my payment secure?",
    answer:
      "Yes. LocalTrades uses secure payment methods and your information is encrypted.",
  },

  {
    id: 6,
    question: "How can I become a professional?",
    answer:
      "Register as a worker, complete your profile, upload verification documents, and wait for approval.",
  },

  {
    id: 7,
    question: "How do I report a problem?",
    answer:
      "Go to Help & Support and contact our support team or submit feedback.",
  },
];

export default function FAQScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>FAQs</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Frequently Asked Questions</Text>

        <Text style={styles.subtitle}>
          Find quick answers to the most common questions.
        </Text>

        {faq.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </ScrollView>
    </View>
  );
}
