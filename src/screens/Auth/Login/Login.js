import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Ionicons name="construct" size={42} color="#2563EB" />
            </View>

            <Text style={styles.appName}>LocalTrades</Text>
          </View>

          {/* Heading */}

          <Text style={styles.title}>Welcome Back 👋</Text>

          <Text style={styles.subtitle}>
            Sign in to find trusted professionals near you.
          </Text>

          {/* Email */}

          <Text style={styles.label}>Email</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#6B7280"
            />

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}

          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#6B7280"
            />

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setSecure(!secure)}
            >
              <Ionicons
                name={secure ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot */}

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() =>
              navigation.navigate("ForgotPassword")
            }
          >
            <Text style={styles.forgot}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.replace("App")}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Divider */}

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Google */}

          <TouchableOpacity style={styles.googleButton}>
            <Ionicons
              name="logo-google"
              size={22}
              color="#EA4335"
            />

            <Text style={styles.googleText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Register */}

          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Register")
              }
            >
              <Text style={styles.register}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;