import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import AppProviders from "./src/context/AppProviders";
import { AddressProvider } from "./src/context/AddressContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { NotificationProvider } from "./src/context/NotificationContext";
import { BookingProvider } from "./src/context/BookingContext";

const App = () => {
  return (
    <AppProviders>
      <FavoritesProvider>
        <AddressProvider>
          <NotificationProvider>
          <BookingProvider>
            <NotificationProvider>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
          </NotificationProvider>
          </BookingProvider>
            </NotificationProvider>
        </AddressProvider>
      </FavoritesProvider>
    </AppProviders>
  );
};

export default App;
