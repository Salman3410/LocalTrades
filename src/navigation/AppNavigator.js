import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";

import WorkerDetailsScreen from "../screens/WorkerDetails/WorkerDetailsScreen";
import Booking from "../screens/Booking/BookingScreen";
import BookingConfirmationScreen from "../screens/BookingConfirmation/BookingConfirmationScreen";
import BookingSuccessScreen from "../screens/BookingSuccess/BookingSuccessScreen";
// import Search from "../screens/Search/Search";
import Chat from "../screens/Chat/Chat";
import Reviews from "../screens/Reviews/Reviews";
import Notifications from "../screens/Notifications/Notifications";
import Settings from "../screens/Settings/Settings";
import Help from "../screens/Help/Help";
import WorkerListingScreen from "../screens/WorkerListing/WorkerListingScreen";
import SearchScreen from "../screens/Search/SearchScreen";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen name="WorkerDetails" component={WorkerDetailsScreen} />

      <Stack.Screen name="Booking" component={Booking} />

      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmationScreen}
      />

      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />

      {/* <Stack.Screen name="Search" component={Search} /> */}

      <Stack.Screen name="Chat" component={Chat} />

      <Stack.Screen name="Reviews" component={Reviews} />

      <Stack.Screen name="Notifications" component={Notifications} />

      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen name="Help" component={Help} />

      <Stack.Screen name="WorkerListing" component={WorkerListingScreen} />

      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
