import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function ConversationCard({ conversation, onPress }) {
  const { worker, lastMessage, time, unread } = conversation;

  const initials = worker.name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.75}
      onPress={onPress}
    >
      {/* Avatar */}

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      {/* Content */}

      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name} numberOfLines={1}>
              {worker.name}
            </Text>

            <Text style={styles.profession} numberOfLines={1}>
              {worker.profession}
            </Text>
          </View>

          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.message} numberOfLines={1}>
            {lastMessage}
          </Text>

          {unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
