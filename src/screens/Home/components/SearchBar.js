import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/searchStyles";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={22} color="#9CA3AF" />

        <TextInput
          style={styles.input}
          placeholder="Search services or professionals..."
          placeholderTextColor="#9CA3AF"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor="#2563EB"
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
        <Ionicons name="options-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
