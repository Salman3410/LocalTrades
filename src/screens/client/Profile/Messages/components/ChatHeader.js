import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function ChatHeader({ worker, onBack }) {
  const initials = worker.name
    .split(" ")
    .map((i) => i[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <View style={styles.chatHeader}>
      {/* Left */}

      <View style={styles.chatLeft}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <View style={styles.chatAvatar}>
          <Text style={styles.chatAvatarText}>{initials}</Text>

          <View style={styles.onlineDot} />
        </View>

        <View style={styles.chatInfo}>
          <Text style={styles.chatName} numberOfLines={1}>
            {worker.name}
          </Text>

          <Text style={styles.chatStatus}>Online</Text>
        </View>
      </View>

      {/* Right */}

      <View style={styles.chatActions}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="call-outline" size={22} color="#374151" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={20} color="#374151" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
