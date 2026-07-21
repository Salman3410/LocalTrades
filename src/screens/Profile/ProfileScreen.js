import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import useAuth from "../../hooks/useAuth";

import ProfileHeader from "./components/ProfileHeader";
import MenuItem from "./components/MenuItem";
import LogoutButton from "./components/LogoutButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/profileStyles";


export default function ProfileScreen() {
  const { user } = useAuth();
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <ProfileHeader
          user={user}
          onEdit={() => navigation.navigate("EditProfile")}
        />

        {/* Divider */}

        <View style={styles.divider} />

        <MenuItem
          icon="calendar-outline"
          title="My Bookings"
          badge={3}
          onPress={() => navigation.navigate("Booking")}
        />

        <MenuItem
          icon="location-outline"
          title="Saved Addresses"
          onPress={() => navigation.navigate("SavedAddresses")}
        />

        {/* <MenuItem
          icon="time-outline"
          title="Booking History"
          onPress={() => navigation.navigate("BookingHistory")}
        /> */}

        <MenuItem
          icon="heart-outline"
          title="Favorites"
          badge={5}
          onPress={() => {
            console.log("Pressed Favorites");
            navigation.navigate("Favorites");
          }}
        />

        <MenuItem
          icon="chatbubble-ellipses-outline"
          title="Messages"
          badge={2}
          onPress={() => navigation.navigate("Messages")}
        />

        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          badge={1}
          onPress={() => navigation.navigate("NotificationSettings")}
        />

        <MenuItem
          icon="help-circle-outline"
          title="Help & Support"
          onPress={() => navigation.navigate("Help")}
        />

        <MenuItem
          icon="settings-outline"
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />

        <View style={styles.divider} />

        <LogoutButton />
      </ScrollView>
    </View>
  );
}
