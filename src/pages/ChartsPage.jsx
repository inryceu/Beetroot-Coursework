import { Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { formatTime } from '../utils/formatDate';
import WeatherChart from '../components/WeatherChart';

const ChartsPage = () => {
  const location = useLocation();
  const forecast = location.state?.forecast || [];

  const data = forecast.slice(0, 9).map(item => ({
    time: formatTime(item.dt),
    temp: Math.round(item.main.temp),
    humidity: item.main.humidity,
    wind: item.wind.speed
  }));

  if (!data.length) {
    return (
      <Container className="py-5 text-center">
        <p>Немає даних для відображення.</p>
        <Link to="/">
          <Button variant="primary">Повернутися до пошуку</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: '900px' }}>
      <Link to="/">
        <Button variant="outline-primary" className="mb-4">← Назад до погоди</Button>
      </Link>
      
      <h2 className="mb-4 fw-bold text-primary">Динаміка змін (24 години)</h2>
      
      <WeatherChart 
        title="Температура (°C)" 
        data={data} 
        dataKey="temp" 
        color="#ff7300" 
      />
      
      <WeatherChart 
        title="Вологість (%)" 
        data={data} 
        dataKey="humidity" 
        color="#387908" 
      />
      
      <WeatherChart 
        title="Швидкість вітру (м/с)" 
        data={data} 
        dataKey="wind" 
        color="#8884d8" 
      />
    </Container>
  );
};

export default ChartsPage;