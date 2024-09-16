import React from "react";
import { Image, Text, View } from "react-native";
import { AppImage } from "../constants/AppImages";
import useFetchCurrentWeather from "../hooks/useFetchCurrentWeather";
import DailyForeCast from "./DailyForeCast";
import OtherStatus from "./DisplaySelectedCityComp/OtherStatus";

const DisplaySelectedCity = () => {
  let { loading, currentWeather, error } = useFetchCurrentWeather();

  if (loading) {
    return (
      <View className="flex justify-center items-center">
        <Text className="text-white text-xl font-bold">Loading...</Text>
      </View>
    );
  }

  console.log(currentWeather?.current.condition?.text);

  return (
    <View className="flex  justify-center space-y-6">
      <View className="items-center space-y-4 justify-center">
        <Text className="text-2xl text-white font-bold">
          {currentWeather?.location.name},
          <Text className="text-lg font-normal">
            {" " + currentWeather?.location.country}
          </Text>
        </Text>
        <Image
          source={AppImage[currentWeather?.current.condition?.text || "Other"]}
          className="w-52 h-52"
        />
      </View>
      <View className="space-y-2 justify-center">
        <Text className="text-white text-6xl ml-5 font-bold text-center">
          {currentWeather?.current.temp_c}&#176;
        </Text>
        <Text className="text-white text-xl ml-1 text-center tracking-widest">
          {currentWeather?.current.condition?.text}
        </Text>
      </View>
      <View className="flex-row justify-between mx-4">
        <OtherStatus
          icon="wind"
          text={`${currentWeather?.current.wind_kph} Km`}
        />
        <OtherStatus
          icon="drop"
          text={`${currentWeather?.current.humidity}%`}
        />
        <OtherStatus
          icon="sun"
          text={`${currentWeather?.forecast.forecastday[0].astro.sunrise}`}
        />
      </View>

      <DailyForeCast />
    </View>
  );
};

export default DisplaySelectedCity;
