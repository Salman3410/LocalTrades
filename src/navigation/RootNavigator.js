import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Auth/Onboarding/Onboarding";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import useAuth from "../hooks/useAuth";
import Splash from "../screens/Auth/Splash/Splash"

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />

          <Stack.Screen name="Auth" component={AuthNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
