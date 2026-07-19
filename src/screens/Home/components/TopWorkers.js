import React from "react";
import { View } from "react-native";

import SectionHeader from "./SectionHeader";
import WorkerCard from "./WorkerCard";

const workers = [
  {
    id: 1,
    name: "Ali Ahmed",
    profession: "Electrician",
    rating: "4.9",
    jobs: 250,
    price: "PKR 800",
    available: true,
  },

  {
    id: 2,
    name: "Ahmed Khan",
    profession: "Plumber",
    rating: "4.8",
    jobs: 190,
    price: "PKR 700",
    available: true,
  },
];

const TopWorkers = () => {
  return (
    <View>
      <SectionHeader title="Top Professionals" />

      {workers.map((worker) => (
        <WorkerCard key={worker.id} {...worker} />
      ))}
    </View>
  );
};

export default TopWorkers;
