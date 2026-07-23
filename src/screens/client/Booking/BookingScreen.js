import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import WorkerSummaryCard from "./components/WorkerSummaryCard";
import ServiceDropdown from "./components/ServiceDropdown";
import DateSelector from "./components/DateSelector";
// import TimeSlotSelector from "./components/TimeSlotSelector";

import styles from "./styles/bookingStyles";

const BookingScreen = ({ route, navigation }) => {
  const { worker } = route.params;

  const [selectedService, setSelectedService] = useState(worker.profession);

  const [selectedDate, setSelectedDate] = useState("Today");

  const [selectedTime, setSelectedTime] = useState("");

  const [address, setAddress] = useState("");

  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Book Service</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Worker */}

        <WorkerSummaryCard worker={worker} />

        {/* Service */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service</Text>

          <ServiceDropdown
            value={selectedService}
            onPress={() => {
              // Later:
              // Open Bottom Sheet
            }}
          />
        </View>

        {/* Date */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>

          <DateSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>

        {/* Time */}

        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time</Text>

          <TimeSlotSelector
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </View> */}

        {/* Address */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Description */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Describe Your Problem</Text>

          <TextInput
            style={styles.textArea}
            placeholder="Example: My AC is leaking water and not cooling properly..."
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Price */}

        <View style={styles.section}>
          <View style={styles.priceCard}>
            <View>
              <Text style={styles.priceLabel}>Estimated Starting Price</Text>

              <Text style={styles.priceValue}>Rs {worker.price}</Text>
            </View>

            <Ionicons name="cash-outline" size={32} color="#111" />
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate("BookingConfirmation", {
              worker,
              service: selectedService,
              date: selectedDate,
              time: selectedTime,
              address,
              description,
            })
          }
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingScreen;
