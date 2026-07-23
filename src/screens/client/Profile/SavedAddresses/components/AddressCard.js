import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AddressTypeBadge from "./AddressTypeBadge";

import styles from "../styles/addressStyles";

export default function AddressCard({ address, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      {/* Top */}

      <View style={styles.cardHeader}>
        <AddressTypeBadge type={address.type} />

        {address.default && (
          <View style={styles.defaultBadge}>
            <Text style={styles.defaultText}>Default</Text>
          </View>
        )}
      </View>

      {/* Address */}

      <View style={styles.addressContainer}>
        <Text style={styles.addressLine}>{address.street}</Text>

        <Text style={styles.addressLine}>{address.area}</Text>

        <Text style={styles.addressCity}>{address.city}</Text>

        <Text style={styles.addressPostal}>{address.postalCode}</Text>
      </View>

      {/* Divider */}

      <View style={styles.divider} />

      {/* Actions */}

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton} onPress={onEdit}>
          <Ionicons name="create-outline" size={18} color="#2563EB" />

          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onDelete}>
          <Ionicons name="trash-outline" size={18} color="#EF4444" />

          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
