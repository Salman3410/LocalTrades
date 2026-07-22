import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import WorkerDetailsScreen from "../screens/WorkerDetails/WorkerDetailsScreen";
import Booking from "../screens/Booking/BookingScreen";
import BookingConfirmationScreen from "../screens/BookingConfirmation/BookingConfirmationScreen";
import BookingSuccessScreen from "../screens/BookingSuccess/BookingSuccessScreen";
import Chat from "../screens/Chat/Chat";
import Reviews from "../screens/Reviews/Reviews";
import Notifications from "../screens/Notifications/Notifications";
import SettingsScreen from "../screens/Profile/Settings/SettingsScreen";
import WorkerListingScreen from "../screens/WorkerListing/WorkerListingScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import FavoritesScreen from "../screens/Profile/Favorites/FavoritesScreen";
// import BookingHistoryScreen from "../screens/Profile/BookingHistory/BookingHistoryScreen";
import MyBookingsScreen from "../screens/MyBookings/MyBookingsScreen";
import NotificationScreen from "../screens/Profile/Notifications/NotificationScreen";
import HelpScreen from "../screens/Profile/Help/HelpScreen";
import FAQScreen from "../screens/Profile/Help/FAQScreen";
import ContactSupportScreen from "../screens/Profile/Help/ContactSupportScreen";
import SavedAddressesScreen from "../screens/Profile/SavedAddresses/SavedAddressesScreen";
import AddAddressScreen from "../screens/Profile/SavedAddresses/AddAddressScreen";
import EditAddressScreen from "../screens/Profile/SavedAddresses/EditAddressScreen";
import MessagesScreen from "../screens/Profile/Messages/MessagesScreen";
import ChatScreen from "../screens/Profile/Messages/ChatScreen";
import NotificationCenterScreen from "../screens/Home/NotificationCenter/NotificationCenterScreen";

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
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WorkerListing" component={WorkerListingScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
      {/* <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} /> */}
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationScreen}
      />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      <Stack.Screen name="SavedAddresses" component={SavedAddressesScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="EditAddress" component={EditAddressScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen
        name="NotificationCenter"
        component={NotificationCenterScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
