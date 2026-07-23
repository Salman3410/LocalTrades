import React from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";


import styles from "../styles/profileStyles";
import useAuth from "../../../../hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: logout,
      },
    ]);
  };

  return (
    <View style={styles.logoutContainer}>
      <TouchableOpacity
        style={styles.logoutRow}
        activeOpacity={0.7}
        onPress={handleLogout}
      >
        <View style={styles.menuLeft}>
          <Ionicons name="log-out-outline" size={21} color="#DC2626" />

          <Text style={styles.logoutText}>Logout</Text>
        </View>

        <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
      </TouchableOpacity>
    </View>
  );
}
