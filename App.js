import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import AppProviders from "./src/context/AppProviders";
import { AddressProvider } from "./src/context/AddressContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";

const App = () => {
  return (
    <AppProviders>
      <FavoritesProvider>
        <AddressProvider>
          {/* <BookingProvider> */}
            <NotificationProvider>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </NotificationProvider>
          {/* </BookingProvider> */}
        </AddressProvider>
      </FavoritesProvider>
    </AppProviders>
  );
};

export default App;
