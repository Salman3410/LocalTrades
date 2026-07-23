import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import categories from "../../../data/categoriesData";

import CategoryHeader from "./components/CategoryHeader";
import CategorySearch from "./components/CategorySearch";
import PopularCategoryChip from "./components/PopularCategoryChip";
import CategoryGrid from "./components/CategoryGrid";
import NeedHelpCard from "./components/NeedHelpCard";

import styles from "./styles/categoryStyles";

export default function Categories() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");

  const popularCategories = categories.filter(
    (item) => item.popular
  );

  return (
    <View style={styles.container}>
      <CategoryHeader navigation={navigation} />

      <CategorySearch
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.sectionTitle}>
        Popular Services
      </Text>

      <FlatList 
        horizontal
        data={popularCategories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularList}
        renderItem={({ item }) => (
          <PopularCategoryChip
            category={item}
            onPress={(title) =>
              navigation.navigate("WorkerListing", {
                category: title,
              })
            }/>
          )}
            />

      <CategoryGrid
        categories={categories}
        search={search}
        navigation={navigation}
      />

      <NeedHelpCard
        navigation={navigation}
      />
    </View>
  );
}