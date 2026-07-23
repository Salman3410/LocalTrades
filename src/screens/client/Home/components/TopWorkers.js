import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SectionHeader from "./SectionHeader";
import WorkerCard from "../../../components/WorkerCard/workerCard";

import workers from "../../../data/workersData";

const TopWorkers = () => {
  const navigation = useNavigation();

  // Show first 2 top workers
  const topWorkers = workers.slice(0, 2);

  return (
    <View>
      <SectionHeader title="Top Professionals" />

      {topWorkers.map((worker) => (
        <WorkerCard
          key={worker.id}
          worker={worker}
          onPress={() =>
            navigation.navigate("WorkerDetails", {
              worker,
            })
          }
        />
      ))}
    </View>
  );
};

export default TopWorkers;
