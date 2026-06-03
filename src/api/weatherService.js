const API_KEY = import.meta.env.OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.OPENWEATHER_BASE_URL;
const GEO_URL = import.meta.env.OPENWEATHER_GEO_URL;

export const getCoordinates = async (city) => {
  try {
    const response = await fetch(
      `${GEO_URL}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`Помилка геокодування: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Місто не знайдено");
    }

    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
  } catch (error) {
    console.error("getCoordinates error:", error);
    throw error;
  }
};

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&lang=uk&appid=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`Помилка отримання погоди: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getWeatherData error:", error);
    throw error;
  }
};

export const fetchWeatherForCity = async (city) => {
  const coords = await getCoordinates(city);
  const weatherData = await getWeatherData(coords.lat, coords.lon);
  return {
    cityName: coords.name,
    ...weatherData,
  };
};
