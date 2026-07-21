import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import SettingsSection from "./components/SettingsSection";
import SettingsItem from "./components/SettingsItem";
import SettingsSwitch from "./components/SettingsSwitch";
import DangerButton from "./components/DangerButton";

import styles from "./styles/settingsStyles";

export default function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState({
    biometric: true,
    faceId: false,
    location: true,
    camera: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ---------- General ---------- */}

        <SettingsSection title="GENERAL" />

        <SettingsItem
          icon="language-outline"
          title="Language"
          value="English"
          onPress={() => {}}
        />

        <SettingsItem
          icon="color-palette-outline"
          title="Appearance"
          value="Light"
          onPress={() => {}}
        />

        {/* ---------- Security ---------- */}

        <SettingsSection title="SECURITY" />

        <SettingsItem
          icon="lock-closed-outline"
          title="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
        />

        <SettingsSwitch
          icon="finger-print-outline"
          title="Fingerprint Login"
          subtitle="Unlock using fingerprint"
          value={settings.biometric}
          onValueChange={() => toggle("biometric")}
        />

        <SettingsSwitch
          icon="scan-outline"
          title="Face ID"
          subtitle="Unlock using Face ID"
          value={settings.faceId}
          onValueChange={() => toggle("faceId")}
        />

        {/* ---------- Permissions ---------- */}

        <SettingsSection title="PERMISSIONS" />

        <SettingsSwitch
          icon="location-outline"
          title="Location"
          subtitle="Allow access to your location"
          value={settings.location}
          onValueChange={() => toggle("location")}
        />

        <SettingsSwitch
          icon="camera-outline"
          title="Camera"
          subtitle="Allow camera access"
          value={settings.camera}
          onValueChange={() => toggle("camera")}
        />

        {/* ---------- App ---------- */}

        <SettingsSection title="ABOUT" />

        <SettingsItem
          icon="shield-checkmark-outline"
          title="Privacy Policy"
          onPress={() => {}}
        />

        <SettingsItem
          icon="document-text-outline"
          title="Terms & Conditions"
          onPress={() => {}}
        />

        <SettingsItem
          icon="information-circle-outline"
          title="About LocalTrades"
          onPress={() => {}}
        />

        <SettingsItem icon="star-outline" title="Rate App" onPress={() => {}} />

        {/* ---------- Danger ---------- */}

        <SettingsSection title="ACCOUNT" />

        <DangerButton title="Delete Account" onPress={() => {}} />
      </ScrollView>
    </View>
  );
}
