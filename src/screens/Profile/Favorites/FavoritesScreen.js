import React, { useState } from "react";

import { View, FlatList, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import FavoriteCard from "./components/FavoriteCard";
import EmptyFavorites from "./components/EmptyFavorites";

import favoritesData from "../../../data/favoritesData";

import styles from "./styles/favoritesStyles";

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState(favoritesData);

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

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

        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
        }}
        renderItem={({ item }) => (
          <FavoriteCard
            worker={item}
            navigation={navigation}
            onRemove={() => removeFavorite(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyFavorites />}
      />
    </View>
  );
}
