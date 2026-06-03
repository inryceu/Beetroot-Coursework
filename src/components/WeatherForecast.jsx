import { useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import ForecastCard from './ForecastCard';
import { formatTime, formatShortDay } from '../utils/formatDate';

const WeatherForecast = ({ forecastList }) => {
  const [key, setKey] = useState('hourly');

  const threeHourForecast = forecastList.slice(0, 8);
  
  const fiveDayForecast = forecastList.filter((_, index) => index % 8 === 0);

  return (
    <div className="mt-4">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4" variant="pills">
        <Tab eventKey="hourly" title="На 24 години">
          <Row className="g-3">
            {threeHourForecast.map((item) => (
              <Col xs={6} sm={4} md={3} lg={3} key={item.dt}>
                <ForecastCard 
                  title={formatTime(item.dt)}
                  icon={item.weather[0].icon}
                  temp={`${Math.round(item.main.temp)}°C`}
                />
              </Col>
            ))}
          </Row>
        </Tab>
        
        <Tab eventKey="daily" title="Прогноз на 5 днів">
          <Row className="g-3 justify-content-center">
            {fiveDayForecast.map((item) => (
              <Col xs={6} sm={4} md={2} lg={2} key={item.dt}>
                <ForecastCard 
                  title={formatShortDay(item.dt)}
                  subtitle={item.weather[0].description}
                  icon={item.weather[0].icon}
                  temp={`${Math.round(item.main.temp)}°C`}
                />
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default WeatherForecast;