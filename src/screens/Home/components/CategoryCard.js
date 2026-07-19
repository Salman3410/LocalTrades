import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/categoryCardStyles";

const CategoryCard = ({ title, icon, color, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${color}15`,
          },
        ]}
      >
        <Ionicons name={icon} size={26} color={color} />
      </View>

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
