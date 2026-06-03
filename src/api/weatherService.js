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

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const [currentResponse, forecastResponse] = await Promise.all([
      fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`,
      ),
      fetch(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`,
      ),
    ]);

    if (!currentResponse.ok || !forecastResponse.ok) {
      throw new Error("Помилка отримання погоди за геолокацією");
    }

    const currentData = await currentResponse.json();
    const forecastData = await forecastResponse.json();

    return {
      cityName: currentData.name,
      current: currentData,
      forecast: forecastData.list,
    };
  } catch (error) {
    console.error("fetchWeatherByCoords error:", error);
    throw error;
  }
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
