import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/client/Categories/Categories";
import MyBookingsScreen from "../screens/client/MyBookings/MyBookingsScreen";
import CustomTabBar from "../components/CustomTabBar/CustomTabBar";
import Home from "../screens/client/Home/Home";
import ProfileScreen from "../screens/client/Profile/ProfileScreen";

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
