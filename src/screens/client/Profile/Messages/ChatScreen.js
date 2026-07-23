import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
 
import { Ionicons } from "@expo/vector-icons";

import ChatHeader from "./components/ChatHeader";
import MessageBubble from "./components/MessageBubble";
import DateSeparator from "./components/DateSeparator";
import TypingIndicator from "./components/TypingIndicator";

import styles from "./styles/messageStyles";

export default function ChatScreen({ route, navigation }) {
  const { conversation } = route.params;

  const [messages, setMessages] = useState(conversation.messages);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (!text.trim()) return;

    const messageId = Date.now().toString();

    const newMessage = {
      id: messageId,
      sender: "user",
      text: text.trim(),
      time: "Now",
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);

    setText("");

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({
        animated: true,
      });
    }, 100);

    // -----------------------------
    // SENT -> DELIVERED
    // -----------------------------

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                status: "delivered",
              }
            : msg,
        ),
      );
    }, 1000);

    // -----------------------------
    // DELIVERED -> SEEN
    // -----------------------------

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                status: "seen",
              }
            : msg,
        ),
      );

      setIsTyping(true);
    }, 1800);

    // -----------------------------
    // WORKER REPLY
    // -----------------------------

    setTimeout(() => {
      setIsTyping(false);

      const reply = {
        id: (Date.now() + 1).toString(),
        sender: "worker",
        text: "Thanks for your message. I'll get back to you shortly.",
        time: "Now",
      };

      setMessages((prev) => [...prev, reply]);

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({
          animated: true,
        });
      }, 100);
    }, 3500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={10}
    >
      <ChatHeader
        worker={conversation.worker}
        onBack={() => navigation.goBack()}
      />

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatList}
        renderItem={({ item }) => {
          if (item.type === "date") {
            return <DateSeparator title={item.title} />;
          }

          return <MessageBubble message={item} />;
        }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({
            animated: false,
          })
        }
      />

      {isTyping && (
        <TypingIndicator
          worker={
            typeof conversation.worker === "object"
              ? conversation.worker.name
              : conversation.worker
          }
        />
      )}

      <View style={styles.inputContainer}>
        {/* Attachment */}

        <TouchableOpacity style={styles.inputIcon}>
          <Ionicons name="attach" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* Message Input */}

        <TextInput
          style={styles.messageInput}
          placeholder="Type a message..."
          placeholderTextColor="#94A3B8"
          value={text}
          onChangeText={setText}
          multiline
        />

        {/* Emoji */}

        <TouchableOpacity style={styles.inputIcon}>
          <Ionicons name="happy-outline" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* Send */}

        <TouchableOpacity
          style={styles.sendButton}
          activeOpacity={0.8}
          onPress={sendMessage}
        >
          <Ionicons name="send" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
