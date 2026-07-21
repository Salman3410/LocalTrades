import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/helpStyles";

export default function ContactSupportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Contact Support</Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.contactCard}>
        <Ionicons name="mail-outline" size={26} color="#2563EB" />

        <Text style={styles.contactTitle}>Email</Text>

        <Text style={styles.contactValue}>support@localtrades.com</Text>
      </View>

      <View style={styles.contactCard}>
        <Ionicons name="call-outline" size={26} color="#2563EB" />

        <Text style={styles.contactTitle}>Phone</Text>

        <Text style={styles.contactValue}>+92 300 1234567</Text>
      </View>

      <View style={styles.contactCard}>
        <Ionicons name="time-outline" size={26} color="#2563EB" />

        <Text style={styles.contactTitle}>Working Hours</Text>

        <Text style={styles.contactValue}>Monday - Saturday</Text>

        <Text style={styles.contactValue}>9:00 AM - 8:00 PM</Text>
      </View>
    </View>
  );
}
