import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function ConversationCard({ conversation, onPress }) {
  const { worker, lastMessage, time, unread } = conversation;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      {/* Avatar */}

      <View style={styles.avatar}>
        <Ionicons name="person" size={25} color="#2563EB" />
      </View>

      {/* Content */}

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {worker.name}
          </Text>

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
