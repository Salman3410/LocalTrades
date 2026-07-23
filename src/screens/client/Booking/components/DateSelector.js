import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "../styles/bookingStyles";

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  const dates = ["Today", "Tomorrow", "Pick Date"];

  return (
    <View style={styles.chipContainer}>
      {dates.map((date) => (
        <TouchableOpacity
          key={date}
          activeOpacity={0.8}
          style={[styles.chip, selectedDate === date && styles.chipActive]}
          onPress={() => setSelectedDate(date)}
        >
          <Text
            style={[
              styles.chipText,
              selectedDate === date && styles.chipActiveText,
            ]}
          >
            {date}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DateSelector;
