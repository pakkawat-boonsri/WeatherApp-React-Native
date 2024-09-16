import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import useFetchCurrentWeather from "../hooks/useFetchCurrentWeather";
import ForecastItems from "./DailyForecastComp/ForecastItems";
const DailyForeCast = () => {
  let { loading, currentWeather, error } = useFetchCurrentWeather();

  if (loading) {
    return (
      <View className="flex justify-center items-center">
        <Text className="text-white text-xl font-bold">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex justify-center items-center">
        <Text className="text-white text-xl font-bold">{error}</Text>
      </View>
    );
  }

  return (
    <View className="m-4 space-y-3">
      <View className="flex-row items-center space-x-2">
        <Entypo name="calendar" size={24} color="white" />
        <Text className="text-white">Daily Forcast</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {currentWeather?.forecast.forecastday.map((forecast, index) => {
          let date = new Date(forecast.date);
          let dayName = date.toLocaleDateString("en-US", { weekday: "long" });
          dayName.split(",")[0];

          return (
            <ForecastItems
              key={index}
              icon={forecast.day.condition.text || "Other"}
              title={dayName}
              temp={forecast.day.avgtemp_c}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DailyForeCast;
