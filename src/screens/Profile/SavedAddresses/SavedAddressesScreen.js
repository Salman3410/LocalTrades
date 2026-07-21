import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AddressCard from "./components/AddressCard";

import EmptyAddress from "./components/EmptyAddress";

import useAddress from "../../../hooks/useAddress";

import styles from "./styles/addressStyles";

export default function SavedAddressesScreen({ navigation }) {
  const {
    addresses,

    deleteAddress,
  } = useAddress();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Saved Addresses</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Manage your locations</Text>

        <Text style={styles.subtitle}>Save addresses for faster booking.</Text>

        {addresses.length === 0 ? (
          <EmptyAddress onPress={() => navigation.navigate("AddAddress")} />
        ) : (
          addresses.map((item) => (
            <AddressCard
              key={item.id}
              address={item}
              onEdit={() =>
                navigation.navigate("EditAddress", {
                  address: item,
                })
              }
              onDelete={() => deleteAddress(item.id)}
            />
          ))
        )}

        {addresses.length > 0 && (
          <TouchableOpacity
            style={styles.addAddressButton}
            onPress={() => navigation.navigate("AddAddress")}
          >
            <Ionicons name="add" size={22} color="#fff" />

            <Text style={styles.addAddressText}>Add New Address</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
