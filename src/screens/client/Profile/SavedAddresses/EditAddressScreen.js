import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/addressStyles";
import useAddress from "../../../../hooks/useAddress";

export default function EditAddressScreen({ route, navigation }) {
  const { address } = route.params;

  const { updateAddress } = useAddress();

  const [street, setStreet] = useState(address.street);

  const [area, setArea] = useState(address.area);

  const [city, setCity] = useState(address.city);

  const handleUpdate = () => {
    updateAddress(
      address.id,

      {
        street,
        area,
        city,
      },
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit Address</Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Street</Text>

        <TextInput
          style={styles.input}
          value={street}
          onChangeText={setStreet}
        />

        <Text style={styles.label}>Area</Text>

        <TextInput style={styles.input} value={area} onChangeText={setArea} />

        <Text style={styles.label}>City</Text>

        <TextInput style={styles.input} value={city} onChangeText={setCity} />

        <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
          <Text style={styles.saveText}>Update Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 