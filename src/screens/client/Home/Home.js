import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import OfferBanner from "./components/OfferBanner";
import SectionHeader from "./components/SectionHeader";
import CategoryCard from "./components/CategoryCard";
import Categories from "./components/Categories";
import TopWorkers from "./components/TopWorkers";
import EmergencyCard from "./components/EmergencyCard";

const Home = () => {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header />

        <SearchBar onPress={()=> navigation.navigate("Search")}/>

        <OfferBanner />

        <SectionHeader
          title="Categories"
          onPress={() => navigation.navigate("Categories")}
        />

        <Categories />

        <TopWorkers />

        <EmergencyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
