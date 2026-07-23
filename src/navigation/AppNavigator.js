import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";

// ---------------- CLIENT ----------------
import BookingScreen from "../screens/client/Booking/BookingScreen";
import BookingConfirmationScreen from "../screens/client/BookingConfirmation/BookingConfirmationScreen";
import BookingSuccessScreen from "../screens/client/BookingSuccess/BookingSuccessScreen";
import MyBookingsScreen from "../screens/client/MyBookings/MyBookingsScreen";
import CategoriesScreen from "../screens/client/Categories/Categories";
import SearchScreen from "../screens/client/Search/SearchScreen";
import WorkerListingScreen from "../screens/client/WorkerListing/WorkerListingScreen";
import WorkerDetailsScreen from "../screens/client/WorkerDetails/WorkerDetailsScreen";

// ---------------- OLD SHARED/PROFILE ----------------
// Change these imports if you've moved them into screens/client

// import Chat from "../screens/Chat/Chat";
// import Reviews from "../screens/Reviews/Reviews";
// import Notifications from "../screens/Notifications/Notifications";

import FavoritesScreen from "../screens/client/Profile/Favorites/FavoritesScreen";
import SettingsScreen from "../screens/shared/Settings/SettingsScreen";
import NotificationScreen from "../screens/client/Profile/Notifications/NotificationScreen";
import HelpScreen from "../screens/shared/Help/HelpScreen";
import FAQScreen from "../screens/shared/Help/FAQScreen";
import ContactSupportScreen from "../screens/shared/Help/ContactSupportScreen";
import SavedAddressesScreen from "../screens/client/Profile/SavedAddresses/SavedAddressesScreen";
import AddAddressScreen from "../screens/client/Profile/SavedAddresses/AddAddressScreen";
import EditAddressScreen from "../screens/client/Profile/SavedAddresses/EditAddressScreen";
import MessagesScreen from "../screens/client/Profile/Messages/MessagesScreen";
import ChatScreen from "../screens/client/Profile/Messages/ChatScreen";
import NotificationCenterScreen from "../screens/client/Home/NotificationCenter/NotificationCenterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Categories */}
      <Stack.Screen name="Categories" component={CategoriesScreen} />

      {/* Search */}
      <Stack.Screen name="Search" component={SearchScreen} />

      {/* Workers */}
      <Stack.Screen name="WorkerListing" component={WorkerListingScreen} />

      <Stack.Screen name="WorkerDetails" component={WorkerDetailsScreen} />

      {/* <Stack.Screen name="Reviews" component={Reviews} /> */}

      {/* Booking */}
      <Stack.Screen name="Booking" component={BookingScreen} />

      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmationScreen}
      />

      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />

      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />

      {/* Notifications */}
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}

      <Stack.Screen
        name="NotificationCenter"
        component={NotificationCenterScreen}
      />

      <Stack.Screen
        name="NotificationSettings"
        component={NotificationScreen}
      />

      {/* Profile */}
      <Stack.Screen name="Favorites" component={FavoritesScreen} />

      <Stack.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen name="SavedAddresses" component={SavedAddressesScreen} />

      <Stack.Screen name="AddAddress" component={AddAddressScreen} />

      <Stack.Screen name="EditAddress" component={EditAddressScreen} />

      <Stack.Screen name="Messages" component={MessagesScreen} />

      <Stack.Screen name="ChatScreen" component={ChatScreen} />

      {/* Help */}
      <Stack.Screen name="Help" component={HelpScreen} />

      <Stack.Screen name="FAQ" component={FAQScreen} />

      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />

      {/* Shared */}
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
    </Stack.Navigator>
  );
}
