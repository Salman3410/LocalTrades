import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import BookingTabs from "./components/BookingTabs";
import BookingCard from "./components/BookingCard";
import useBookings from "../../../hooks/useBooking";
import styles from "./styles/myBookingsStyles";

export default function MyBookingsScreen({ navigation }) {
  const { upcomingBookings, completedBookings, cancelledBookings, loading } =
    useBookings();
  const [activeTab, setActiveTab] = useState("Upcoming");

  const getBookings = () => {
    switch (activeTab) {
      case "Completed":
        return completedBookings;

      case "Cancelled":
        return cancelledBookings;

      default:
        return upcomingBookings;
    }
  };

  const bookings = getBookings();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>

      <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
          flexGrow: bookings.length === 0 ? 1 : 0,
        }}
        renderItem={({ item }) => (
          <BookingCard booking={item} navigation={navigation} />
        )}
        ListEmptyComponent={
          !loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 80,
                paddingHorizontal: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                No {activeTab} Bookings
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  textAlign: "center",
                  color: "#6B7280",
                  lineHeight: 22,
                }}
              >
                Your {activeTab.toLowerCase()} bookings will appear here.
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
