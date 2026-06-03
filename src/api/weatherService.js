const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&lang=uk&appid=${API_KEY}`,
  );

  if (!response.ok) {
    if (response.status === 404) throw new Error("Місто не знайдено");
    throw new Error(`Помилка отримання поточної погоди: ${response.status}`);
  }

  return await response.json();
};

export const getForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&lang=uk&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Помилка отримання прогнозу: ${response.status}`);
  }

  return await response.json();
};

export const fetchWeatherForCity = async (city) => {
  try {
    const [currentData, forecastData] = await Promise.all([
      getCurrentWeather(city),
      getForecast(city),
    ]);

    return {
      cityName: currentData.name,
      current: currentData,
      forecast: forecastData.list,
    };
  } catch (error) {
    console.error("fetchWeatherForCity error:", error);
    throw error;
  }
};
