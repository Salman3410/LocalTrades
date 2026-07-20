import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import workers from "../../data/workersData";
import styles from "./styles/workerListingStyles";
import WorkerCard from "../../components/WorkerCard/workerCard";

export default function WorkerListingScreen({ route, navigation }) {
  const { category } = route.params || {};

  const filteredWorkers = category
    ? workers.filter((worker) => worker.profession === category)
    : workers;

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>{category || "Professionals"}</Text>

          <Text style={styles.resultText}>
            {filteredWorkers.length} professionals found
          </Text>
        </View>
      </View>

      {/* Filter Row */}

      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={18} />

          <Text>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="swap-vertical-outline" size={18} />

          <Text>Sort</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredWorkers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <WorkerCard
            worker={item}
            onPress={() => {
              navigation.navigate("WorkerDetails", {
                worker: item,
              });
            }}
          />
        )}
      />
    </View>
  );
}
