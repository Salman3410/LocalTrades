import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/searchStyles";

const SearchBar = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Ionicons name="search-outline" size={22} color="#9CA3AF" />

        <TextInput
          style={styles.input}
          placeholder="Search services or professionals..."
          placeholderTextColor="#9CA3AF"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
        <Ionicons name="options-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchBar;
