import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import useNotifications from "../../../hooks/useNotifications";

import NotificationCard from "./components/NotificationCard";
import EmptyNotifications from "./components/EmptyNotifications";

import styles from "./styles/notificationCenterStyles";

export default function NotificationCenterScreen() {
  const navigation = useNavigation();

  const {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        {notifications.length > 0 ? (
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={styles.readAll}>Read all</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 70 }} />
        )}
      </View>

      {/* List */}

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => {}} />
        }
        renderItem={({ item }) => (
          <NotificationCard
            notification={item}
            onPress={() => markAsRead(item.id)}
            onDelete={() => deleteNotification(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyNotifications />}
      />
    </View>
  );
}
