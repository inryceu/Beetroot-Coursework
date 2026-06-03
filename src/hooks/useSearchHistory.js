import { useState, useEffect } from "react";

export const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("weatherSearchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const addCityToHistory = (cityName) => {
    if (!cityName) return;

    const cityTrimmed = cityName.trim();

    setHistory((prevHistory) => {
      const filteredHistory = prevHistory.filter(
        (item) => item.toLowerCase() !== cityTrimmed.toLowerCase(),
      );

      const newHistory = [cityTrimmed, ...filteredHistory].slice(0, 5);
      localStorage.setItem("weatherSearchHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };

  return { history, addCityToHistory };
};
