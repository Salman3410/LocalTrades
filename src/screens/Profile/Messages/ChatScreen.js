import React, { useState } from "react";

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

import styles from "./styles/messageStyles";

export default function ChatScreen({ route, navigation }) {
  const { conversation } = route.params;

  const [messages, setMessages] = useState(conversation.messages);

  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now().toString(),

      sender: "user",

      text: text,

      time: "Now",
    };

    setMessages([...messages, newMessage]);

    setText("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ChatHeader
        worker={conversation.worker}
        onBack={() => navigation.goBack()}
      />

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatList}
        renderItem={({ item }) => <MessageBubble message={item} />}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type a message..."
          placeholderTextColor="#9CA3AF"
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
