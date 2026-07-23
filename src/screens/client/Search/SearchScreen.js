import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RecentSearchItem from "./components/RecentSearchItem";
import ServiceChip from "./components/ServiceChip";
import styles from "./styles/searchStyles";
import recentSearches from "../../../data/recentSearches";
import popularServices from "../../../data/popularServices";
import workers from "../../../data/workersData";
import WorkerCard from "../../../components/WorkerCard/workerCard";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const filteredWorkers = workers.filter((worker) => {
    const search = query.toLowerCase();

    return (
      worker.name.toLowerCase().includes(search) ||
      worker.profession.toLowerCase().includes(search)
    );
  });

  const handleSearch = (text) => {
    setQuery(text);
  };

  const openListing = (category) => {
    navigation.navigate("WorkerListing", {
      category,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search */}

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />

        <TextInput
          style={styles.input}
          placeholder="Search workers or services"
          placeholderTextColor="#999"
          value={query}
          onChangeText={handleSearch}
          autoFocus
        />
      </View>

      {/* Search Results */}

      {query.length > 0 ? (
        <FlatList
          data={filteredWorkers}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          renderItem={({ item }) => (
            <WorkerCard
              worker={item}
              onPress={() =>
                navigation.navigate("WorkerDetails", {
                  worker: item,
                })
              }
            />
          )}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                color: "#777",
                marginTop: 40,
              }}
            >
              No results found
            </Text>
          }
        />
      ) : (
        <>
          {/* Recent Searches */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>

            {recentSearches.map((item) => (
              <RecentSearchItem
                key={item}
                title={item}
                onPress={() => openListing(item)}
              />
            ))}
          </View>

          {/* Popular Services */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Services</Text>

            <View style={styles.chipsContainer}>
              {popularServices.map((item) => (
                <ServiceChip
                  key={item}
                  title={item}
                  onPress={() => openListing(item)}
                />
              ))}
            </View>
          </View>
        </>
      )}
    </View>
  );
}
