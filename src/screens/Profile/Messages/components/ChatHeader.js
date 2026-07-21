import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function ChatHeader({ worker, onBack }) {
  return (
    <View style={styles.chatHeader}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="#111827" />
      </TouchableOpacity>

      <View style={styles.chatUser}>
        <View style={styles.chatAvatar}>
          <Ionicons name="person" size={22} color="#2563EB" />
        </View>

        <View>
          <Text style={styles.chatName}>{worker.name}</Text>

          <Text style={styles.chatProfession}>{worker.profession}</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={22} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
}
