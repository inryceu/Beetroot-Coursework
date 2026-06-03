import React from 'react';
import ForecastCard from '../ForecastCard';
import { formatTime } from '../../utils/formatDate';

const HourlyGrid = ({ data }) => {
  return (
    <div className="forecast-grid forecast-grid--hourly">
      {data.map((item) => (
        <div className="forecast-grid__item" key={item.dt}>
          <ForecastCard
            title={formatTime(item.dt)}
            icon={item.weather[0].icon}
            temp={`${Math.round(item.main.temp)}°C`}
          />
        </div>
      ))}
    </div>
  );
};

export default HourlyGrid;