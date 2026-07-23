import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "../styles/bookingStyles";

export default function TimeSlotSelector({
  slots = [],
  selectedTime,
  setSelectedTime,
}) {
  if (!slots || slots.length === 0) {
    return (
      <View style={styles.noSlotsContainer}>
        <Text style={styles.noSlotsText}>
          No available slots for the selected day.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.timeContainer}>
      {slots.map((slot) => {
        const isSelected = selectedTime === slot.time;

        return (
          <TouchableOpacity
            key={slot.id}
            activeOpacity={0.85}
            disabled={!slot.available}
            onPress={() => setSelectedTime(slot.time)}
            style={[
              styles.timeChip,

              isSelected && styles.timeChipActive,

              !slot.available && styles.timeChipDisabled,
            ]}
          >
            <Text
              style={[
                styles.timeText,

                isSelected && styles.timeTextActive,

                !slot.available && styles.timeTextDisabled,
              ]}
            >
              {slot.time}
            </Text>

            {!slot.available && <Text style={styles.bookedText}>Booked</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
