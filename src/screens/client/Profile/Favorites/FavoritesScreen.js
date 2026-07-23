import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FavoriteCard from "./components/FavoriteCard";
import EmptyFavorites from "./components/EmptyFavorites";
import styles from "./styles/favoritesStyles";
import useFavorites from "../../../../hooks/useFavorites";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          flexGrow: 1,
        }}
        renderItem={({ item }) => (
          <FavoriteCard worker={item} navigation={navigation} />
        )}
        ListEmptyComponent={<EmptyFavorites />}
      />
    </View>
  );
}
