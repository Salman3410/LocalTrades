import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "../styles/myBookingsStyles";

const tabs = ["Upcoming", "Completed", "Cancelled"];

export default function BookingTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}