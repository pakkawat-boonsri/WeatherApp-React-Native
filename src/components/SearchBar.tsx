import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../utils/theme";

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [location, setlocation] = useState<string[]>(["1", "2", "3", "4", "5"]);

  const toggleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSelectLocation = ({ location }: { location: string }) => {
    // TODO: Fetch weather data for selected location
    console.log("Selected Location: ", location);
  };

  return (
    <View className="mx-4 pt-3">
      {/* Search Bar */}
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearchBar ? theme.bgWhite("0.2") : "transparent",
        }}
      >
        {showSearchBar && (
          <TextInput
            placeholder="Searching City Name..."
            placeholderTextColor={"white"}
            className="pl-6 h-10 pb-1 flex-1 text-base rounded-full"
          />
        )}

        <TouchableOpacity
          style={{ backgroundColor: theme.bgWhite("0.3") }}
          className="p-3 rounded-full"
          onPress={() => toggleShowSearchBar()}
        >
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Search Items */}
      {location.length > 0 && showSearchBar && (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
          {location.map((item, index) => {
            let showBorder: boolean = index + 1 != location.length;
            let borderClass = showBorder ? "border-b-2 border-b-gray-400" : "";
            return (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center p-3 px-4 mb-1 border-0 ${borderClass}`}
                onPress={() => handleSelectLocation({ location: item })}
              >
                <Entypo name="location-pin" size={24} color="grey" />
                <Text className="text-black text-lg ml-2">{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SearchBar;
