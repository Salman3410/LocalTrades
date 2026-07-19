import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator, StatusBar } from "react-native";
import styles from "./styles";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const isFirstTime = true;
      const isLoggedIn = false;

      if (isFirstTime) {
        navigation.replace("Onboarding");
      } else if (!isLoggedIn) {
        navigation.replace("Auth");
      } else {
        navigation.replace("App");
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2563EB" barStyle="light-content" />

      <Image
        // source={require("../../assets/images/logos/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>LocalTrades</Text>

      <Text style={styles.tagline}>Trusted Professionals Near You</Text>

      <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
    </View>
  );
};

export default Splash;
