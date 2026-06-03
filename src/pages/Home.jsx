import CurrentWeather from '../components/CurrentWeather';
import ForecastCard from '../components/ForecastCard';

const data = {
  "dt": 1700000000,
  "temp": 22.5,
  "feels_like": 21.0,
  "humidity": 60,
  "wind_speed": 5.5,
  "weather": [
    {
      "description": "clear sky",  
      "icon": "01d"
    }
  ]
};
const city = "Kyiv";

const Home = () => {
  return (
    <div className="home">  
        <CurrentWeather data={data} city={city} />
        <hr/>
        <ForecastCard 
          title="tomorrow" 
          icon="02d"
          temp="24°C"
          subtitle="Мінлива хмарність"
        />
    </div>
  )
};

export default Home;