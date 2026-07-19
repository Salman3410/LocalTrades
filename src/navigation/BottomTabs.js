import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home";
import Categories from "../screens/Categories/Categories";
import MyBookings from "../screens/MyBookings/MyBookings";
import Profile from "../screens/Profile/Profile";


import CustomTabBar from "../components/CustomTabBar/CustomTabBar";

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

      <Tab.Screen name="Booking" component={MyBookings} />

      <Tab.Screen name="Profile" component={Profile} />

     
    </Tab.Navigator>
  );
};

export default BottomTabs;
