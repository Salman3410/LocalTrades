import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Categories from "../screens/Categories/Categories";
import MyBookingsScreen from "../screens/MyBookings/MyBookingsScreen";
import CustomTabBar from "../components/CustomTabBar/CustomTabBar";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Categories" component={Categories} />

      <Tab.Screen name="Booking" component={MyBookingsScreen} />

      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
