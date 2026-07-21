import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import AppProviders from "./src/context/AppProviders";
import { AddressProvider } from "./src/context/AddressContext";

const App = () => {
  return (
    <AppProviders>
      <AddressProvider>

    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
      </AddressProvider>
    </AppProviders>
  );
};

export default App;
