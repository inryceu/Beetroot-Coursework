import React from 'react';
import ForecastCard from '../ForecastCard';
import { formatShortDay } from '../../utils/formatDate';

const DailyGrid = ({ data, gridClassModifier }) => {
  if (!data || data.length === 0) {
    return <div className="text-muted">Немає даних</div>;
  }

  const isOdd = data.length % 2 !== 0;

  return (
    <div className={`forecast-grid forecast-grid--${gridClassModifier}`}>
      {data.map((item, index) => {
        const isLastOdd = isOdd && index === data.length - 1;
        return (
          <div
            className={`forecast-grid__item${isLastOdd ? ' forecast-grid__item--full' : ''}`}
            key={item.dt}
          >
            <ForecastCard
              title={formatShortDay(item.dt)}
              subtitle={item.weather[0].description}
              icon={item.weather[0].icon}
              temp={`${Math.round(item.main.temp)}°C`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DailyGrid;