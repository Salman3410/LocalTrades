import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/profileStyles";

export default function ProfileHeader({ user, onEdit }) {
  return (
    <View style={styles.profileHeader}>
      {/* Left */}

      <View style={styles.leftSection}>
        {user?.profileImage ? (
          <Image source={{ uri: user.profileImage }} style={styles.avatar} />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Text>
          </View>
        )}

        <View style={styles.userInfo}>
          <Text style={styles.name} numberOfLines={1}>
            {user?.name || "Muhammad Ali"}
          </Text>

          <Text style={styles.email} numberOfLines={1}>
            {user?.email || "ali@gmail.com"}
          </Text>
        </View>
      </View>

      {/* Right */}

      <TouchableOpacity
        style={styles.editButton}
        activeOpacity={0.8}
        onPress={onEdit}
      >
        <Ionicons name="create-outline" size={18} color="#2563EB" />
      </TouchableOpacity>
    </View>
  );
}
