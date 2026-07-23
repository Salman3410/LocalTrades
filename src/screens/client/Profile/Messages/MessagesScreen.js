import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ConversationCard from "./components/ConversationCard";


import styles from "./styles/messageStyles";
import messagesData from "../../../../data/messagesData";

export default function MessagesScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredMessages = messagesData.filter((item) =>
    item.worker.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Messages</Text>

        <View
          style={{
            width: 24,
          }}
        />
      </View>

      {/* Search */}

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" />

        <TextInput
          placeholder="Search conversations"
          placeholderTextColor="#9CA3AF"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Messages */}

      {filteredMessages.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="chatbubble-outline" size={60} color="#CBD5E1" />

          <Text style={styles.emptyTitle}>No conversations</Text>

          <Text style={styles.emptyText}>
            Your conversations with workers will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredMessages}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ConversationCard
              conversation={item}
              onPress={() =>
                navigation.navigate(
                  "ChatScreen",

                  {
                    conversation: item,
                  },
                )
              }
            />
          )}
        />
      )}
    </View>
  );
}
 