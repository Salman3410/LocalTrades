import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Splash/Splash";
import Onboarding from "../screens/Onboarding/Onboarding";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Onboarding" component={Onboarding} />

      <Stack.Screen name="Auth" component={AuthNavigator} />

      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
