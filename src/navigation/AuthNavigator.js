import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import OTP from "../screens/Auth/OTP/OTP";
import ForgotPassword from "../screens/Auth/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="OTP" component={OTP} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
