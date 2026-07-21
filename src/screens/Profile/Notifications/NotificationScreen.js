import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import NotificationItem from "./components/NotificationItem";
import styles from "./styles/notificationStyles";

export default function NotificationScreen() {
  const [settings, setSettings] = useState({
    push: true,
    bookings: true,
    messages: true,
    reminders: true,
    promotions: false,
    nearby: false,
    email: false,
    sms: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>Notifications</Text>

        <Text style={styles.subHeading}>
          Manage how you receive updates from LocalTrades.
        </Text>

        <NotificationItem
          icon="notifications-outline"
          title="Push Notifications"
          subtitle="Receive notifications on your device"
          value={settings.push}
          onValueChange={() => toggleSetting("push")}
        />

        <NotificationItem
          icon="calendar-outline"
          title="Booking Updates"
          subtitle="Booking confirmations & status changes"
          value={settings.bookings}
          onValueChange={() => toggleSetting("bookings")}
        />

        <NotificationItem
          icon="chatbubble-ellipses-outline"
          title="Messages"
          subtitle="New messages from professionals"
          value={settings.messages}
          onValueChange={() => toggleSetting("messages")}
        />

        <NotificationItem
          icon="time-outline"
          title="Booking Reminders"
          subtitle="Reminder before your booking"
          value={settings.reminders}
          onValueChange={() => toggleSetting("reminders")}
        />

        <NotificationItem
          icon="gift-outline"
          title="Offers & Promotions"
          subtitle="Discounts and special offers"
          value={settings.promotions}
          onValueChange={() => toggleSetting("promotions")}
        />

        <NotificationItem
          icon="location-outline"
          title="Nearby Professionals"
          subtitle="New workers near your location"
          value={settings.nearby}
          onValueChange={() => toggleSetting("nearby")}
        />

        <NotificationItem
          icon="mail-outline"
          title="Email Notifications"
          subtitle="Receive updates by email"
          value={settings.email}
          onValueChange={() => toggleSetting("email")}
        />

        <NotificationItem
          icon="phone-portrait-outline"
          title="SMS Notifications"
          subtitle="Important alerts via SMS"
          value={settings.sms}
          onValueChange={() => toggleSetting("sms")}
        />
      </ScrollView>
    </View>
  );
}
