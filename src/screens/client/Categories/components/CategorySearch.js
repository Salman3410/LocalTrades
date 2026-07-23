import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/categoryStyles";

export default function CategorySearch({ value, onChangeText, onClear }) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search-outline" size={20} color="#94A3B8" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search services..."
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        autoCapitalize="words"
        autoCorrect={false}
      />

      {value.length > 0 && (
        <TouchableOpacity activeOpacity={0.7} onPress={onClear}>
          <Ionicons name="close-circle" size={20} color="#94A3B8" />
        </TouchableOpacity>
      )}
    </View>
  );
}
