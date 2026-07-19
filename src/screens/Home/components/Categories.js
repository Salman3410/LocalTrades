import React from "react";
import { FlatList, View } from "react-native";

import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: "1",
    title: "Electrician",
    icon: "flash",
    color: "#F59E0B",
  },
  {
    id: "2",
    title: "Plumber",
    icon: "water",
    color: "#3B82F6",
  },
  {
    id: "3",
    title: "Carpenter",
    icon: "hammer",
    color: "#F97316",
  },
  {
    id: "4",
    title: "Painter",
    icon: "color-fill",
    color: "#8B5CF6",
  },
  {
    id: "5",
    title: "Cleaner",
    icon: "sparkles",
    color: "#10B981",
  },
  {
    id: "6",
    title: "AC Repair",
    icon: "snow",
    color: "#06B6D4",
  },
];

const Categories = () => {
  return (
    <View>
      

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            icon={item.icon}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

export default Categories;
