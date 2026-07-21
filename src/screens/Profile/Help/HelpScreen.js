import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import HelpCard from "./components/HelpCard";

import styles from "./styles/helpStyles";

export default function HelpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Help & Support</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Need some help?</Text>

        <Text style={styles.subtitle}>
          We're always here to help you with bookings, payments and your
          account.
        </Text>

        <HelpCard
          icon="chatbubble-ellipses-outline"
          title="Contact Support"
          subtitle="Talk with our support team"
          onPress={() => navigation.navigate("ContactSupport")}
        />

        <HelpCard
          icon="help-circle-outline"
          title="Frequently Asked Questions"
          subtitle="Find answers instantly"
          onPress={() => navigation.navigate("FAQ")}
        />

        <HelpCard
          icon="star-outline"
          title="Rate LocalTrades"
          subtitle="Share your experience"
        />

        <HelpCard
          icon="create-outline"
          title="Send Feedback"
          subtitle="Help us improve"
        />

        <View style={styles.versionBox}>
          <Text style={styles.version}>LocalTrades</Text>

          <Text style={styles.versionNumber}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}
