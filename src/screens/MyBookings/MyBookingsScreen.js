import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import BookingTabs from "./components/BookingTabs";
import BookingCard from "./components/BookingCard";

import styles from "./styles/myBookingsStyles";

const bookings = [
  {
    id: "1",
    worker: "Ahmed Khan",
    profession: "Electrician",
    date: "24 Jul",
    time: "10:00 AM",
    status: "Upcoming",
    price: 1500,
  },
  {
    id: "2",
    worker: "Ali Raza",
    profession: "AC Technician",
    date: "20 Jul",
    time: "02:00 PM",
    status: "Completed",
    price: 2200,
  },
  {
    id: "3",
    worker: "Usman",
    profession: "Plumber",
    date: "18 Jul",
    time: "09:00 AM",
    status: "Cancelled",
    price: 1200,
  },
];

export default function MyBookingsScreen() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const filtered = bookings.filter((item) => item.status === activeTab);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>

      <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BookingCard booking={item} />}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}
