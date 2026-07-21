import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ProfileScreen from "../../screens/Profile/ProfileScreen";

const icons = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Search: {
    active: "search",
    inactive: "search-outline",
  },
  Categories: {
    active: "grid",
    inactive: "grid-outline",
  },
  Booking: {
    active: "calendar",
    inactive: "calendar-outline",
  },
  ProfileScreen: {
    active: "person",
    inactive: "person-outline",
  },
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = icons[route.name] || {
          active: "ellipse",
          inactive: "ellipse-outline",
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Ionicons
              name={focused ? icon.active : icon.inactive}
              size={24}
              color={focused ? "#2563EB" : "#9CA3AF"}
            />

            <Text style={[styles.label, focused && styles.activeLabel]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
