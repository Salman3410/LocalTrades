import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    // TODO: API Call
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          {/* Top */}

          <View style={styles.topSection}>
            <View style={styles.logoCircle}>
              <Ionicons name="lock-open-outline" size={40} color="#2563EB" />
            </View>

            <Text style={styles.title}>Forgot Password?</Text>

            <Text style={styles.subtitle}>
              Enter your email address and we'll send you a password reset link.
            </Text>
          </View>

          {/* Form */}

          <View>
            <Text style={styles.label}>Email</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#6B7280" />

              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom */}

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={18} color="#2563EB" />

            <Text style={styles.backText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
