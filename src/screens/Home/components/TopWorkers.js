import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionHeader from "./SectionHeader";
import WorkerCard from "../../../components/WorkerCard/workerCard";

const workers = [
  {
    id: "1",
    name: "Ali Ahmed",
    profession: "Electrician",
    rating: "4.9",
    jobs: 250,
    price: 800,
    available: true,
    location: "Lahore",
    experience: "5 years",
  },
  {
    id: "2",
    name: "Ahmed Khan",
    profession: "Plumber",
    rating: "4.8",
    jobs: 190,
    price: 700,
    available: true,
    location: "Karachi",
    experience: "4 years",
  },
];

const TopWorkers = () => {
  const navigation = useNavigation();

  return (
    <View>
      <SectionHeader title="Top Professionals" />

      {workers.map((worker) => (
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
