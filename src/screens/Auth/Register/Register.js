import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const Register = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.content}
        >
          {/* Logo */}

          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Ionicons name="person-add" size={40} color="#2563EB" />
            </View>

            <Text style={styles.appName}>LocalTrades</Text>
          </View>

          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>
            Create your account to book trusted professionals.
          </Text>

          {/* Full Name */}

          <Text style={styles.label}>Full Name</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#6B7280" />

            <TextInput placeholder="John Doe" style={styles.input} />
          </View>

          {/* Email */}

          <Text style={styles.label}>Email</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#6B7280" />

            <TextInput
              placeholder="example@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          {/* Phone */}

          <Text style={styles.label}>Phone Number</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={20} color="#6B7280" />

            <TextInput
              placeholder="03XX XXXXXXX"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          {/* Password */}

          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />

            <TextInput
              placeholder="Password"
              secureTextEntry={secure}
              style={styles.input}
            />

            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons
                name={secure ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}

          <Text style={styles.label}>Confirm Password</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="shield-checkmark-outline"
              size={20}
              color="#6B7280"
            />

            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={confirmSecure}
              style={styles.input}
            />

            <TouchableOpacity onPress={() => setConfirmSecure(!confirmSecure)}>
              <Ionicons
                name={confirmSecure ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>

          {/* Register */}

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Divider */}

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Google */}

          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={22} color="#EA4335" />

            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Bottom */}

          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
