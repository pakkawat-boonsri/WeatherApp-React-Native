import React from "react";
import { Image, Text, View } from "react-native";

type OtherStatusProps = {
  icon: "wind" | "drop" | "sun";
  text: string;
};

const iconMaps = {
  wind: require("../../../assets/icons/wind.png"),
  drop: require("../../../assets/icons/drop.png"),
  sun: require("../../../assets/icons/sun.png"),
};

const OtherStatus = ({ icon, text }: OtherStatusProps) => {
  return (
    <View className="flex-row space-x-2 items-center">
      <Image source={iconMaps[icon]} className="w-6 h-6" />
      <Text className="text-white font-semibold text-base">{text}</Text>
    </View>
  );
};

export default OtherStatus;
