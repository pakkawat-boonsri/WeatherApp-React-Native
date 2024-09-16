import { useEffect, useState } from "react";
import { getCurrentWeatherAPI } from "../services/WeatherAPI";
import { CurrentWeatherModel } from "../services/models/CurrentWeatherModel";

export default function useFetchCurrentWeather() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherModel>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getCurrentWeatherAPI();
        if (response) {
          const data = (await response.json()) as CurrentWeatherModel;
          setCurrentWeather(data);
        } else {
          setError("Failed to fetch weather data");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    getCurrentWeather();
  }, []);

  return { loading, currentWeather, error };
}
