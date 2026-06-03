import { useState } from "react";
import { fetchWeatherForCity } from "../api/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCity = async (city) => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherForCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Щось пішло не так");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, searchCity };
};
