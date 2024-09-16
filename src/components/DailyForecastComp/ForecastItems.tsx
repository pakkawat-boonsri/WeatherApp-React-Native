import React from "react";
import { Image, Text, View } from "react-native";
import { AppImage } from "../../constants/AppImages";
import { theme } from "../../utils/theme";

type ForecastItemsProps = {
  icon: string;
  title: string;
  temp: number;
};

const ForecastItems = ({ icon, title, temp }: ForecastItemsProps) => {
  return (
    <View
      className="flex justify-center items-center p-4 rounded-3xl py-3 space-y-1 mr-2"
      style={{ backgroundColor: theme.bgWhite("0.15") }}
    >
      <Image source={AppImage[icon]} className="w-11 h-11" />
      <Text className="text-white">{title}</Text>
      <Text className="text-white font-bold text-xl">{temp}&#176;</Text>
    </View>
  );
};

export default ForecastItems;
