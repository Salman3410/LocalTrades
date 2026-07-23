import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


import styles from "./styles/addressStyles";
import useAddress from "../../../../hooks/useAddress";

export default function AddAddressScreen({ navigation }) {
  const { addAddress } = useAddress();

  const [type, setType] = useState("Home");

  const [street, setStreet] = useState("");

  const [area, setArea] = useState("");

  const [city, setCity] = useState("");

  const [postal, setPostal] = useState("");

  const handleSave = () => {
    const newAddress = {
      type,

      street,

      area,

      city,

      postalCode: postal,

      default: false,
    };

    addAddress(newAddress);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Address</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Address Type</Text>

        <View style={styles.typeRow}>
          {["Home", "Work", "Other"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.typeOption, type === item && styles.activeType]}
              onPress={() => setType(item)}
            >
              <Text
                style={[
                  styles.typeOptionText,
                  type === item && styles.activeTypeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Street Address</Text>

        <TextInput
          style={styles.input}
          placeholder="House number, street"
          value={street}
          onChangeText={setStreet}
        />

        <Text style={styles.label}>Area</Text>

        <TextInput
          style={styles.input}
          placeholder="Area"
          value={area}
          onChangeText={setArea}
        />

        <Text style={styles.label}>City</Text>

        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Postal Code</Text>

        <TextInput
          style={styles.input}
          placeholder="54000"
          keyboardType="numeric"
          value={postal}
          onChangeText={setPostal}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
 