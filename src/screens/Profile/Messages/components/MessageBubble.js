import React from "react";

import { View, Text } from "react-native";

import styles from "../styles/messageStyles";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

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

        <Text
          style={[
            styles.messageTime,

            isUser ? styles.userTime : styles.workerTime,
          ]}
        >
          {message.time}
        </Text>
      </View>
    </View>
  );
}
