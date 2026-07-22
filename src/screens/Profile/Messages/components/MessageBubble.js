import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/messageStyles";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  const renderStatus = () => {
    if (!isUser) return null;

    switch (message.status) {
      case "sent":
        return (
          <Ionicons
            name="checkmark"
            size={13}
            color="#DBEAFE"
            style={{ marginLeft: 5 }}
          />
        );

      case "delivered":
        return (
          <Ionicons
            name="checkmark-done"
            size={13}
            color="#DBEAFE"
            style={{ marginLeft: 5 }}
          />
        );

      case "seen":
        return <Text style={styles.statusText}>Seen</Text>;

      default:
        return null;
    }
  };

  return (
    <View
      style={[
        styles.messageWrapper,
        isUser ? styles.userWrapper : styles.workerWrapper,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.workerBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isUser ? styles.userText : styles.workerText,
          ]}
        >
          {message.text}
        </Text>

        <View style={styles.messageFooter}>
          <Text
            style={[
              styles.messageTime,
              isUser ? styles.userTime : styles.workerTime,
            ]}
          >
            {message.time}
          </Text>

          {renderStatus()}
        </View>
      </View>
    </View>
  );
}
