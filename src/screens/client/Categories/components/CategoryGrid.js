import React from "react";
import { FlatList } from "react-native";

import CategoryCard from "./CategoryCard";

import styles from "../styles/categoryStyles";

export default function CategoryGrid({ categories, search, navigation }) {
  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <FlatList
      data={filteredCategories}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          onPress={() =>
            navigation.navigate("WorkerListing", {
              category: item.title,
            })
          }
        />
      )}
    />
  );
}
