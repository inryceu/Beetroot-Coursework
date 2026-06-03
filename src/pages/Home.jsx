import { Container, Spinner, Alert } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast';

import { useEffect } from 'react';
import { useWeather } from '../hooks/useWeather';

const Home = () => {
  const { weather, loading, error, searchCity } = useWeather();

  useEffect(() => {
    searchCity('Kyiv');
  }, []); 

  return (
    <Container className="py-5" style={{ maxWidth: '900px' }}>
      <h1 className="text-center mb-4 fw-bold text-primary">Weather Dashboard</h1>
      
      <SearchBar onSearch={searchCity} />

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Завантаження...</span>
          </Spinner>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center shadow-sm">
          {error}
        </Alert>
      )}

      {weather && !loading && (
        <div className="fade-in">
          <CurrentWeather data={weather.current} city={weather.cityName} />
          <WeatherForecast hourly={weather.hourly} daily={weather.daily} />
        </div>
      )}
    </Container>
  );
};

export default Home;