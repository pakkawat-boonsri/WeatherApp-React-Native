import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import DisplaySelectedCity from "../components/DisplaySelectedCity";
import SearchBar from "../components/SearchBar";

const WeatherView = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-gray-950">
      <StatusBar style="light" />
      <ScrollView>
        <SearchBar />
        <DisplaySelectedCity />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherView;
