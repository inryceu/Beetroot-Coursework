import { useState } from 'react';
import ForecastCard from './ForecastCard';
import { formatTime, formatShortDay } from '../utils/formatDate';

const WeatherForecast = ({ forecastList }) => {
  const [view, setView] = useState('hourly');

  const threeHourForecast = forecastList.slice(0, 8);
  const dailyForecast = forecastList.filter((_, index) => index % 8 === 0);
  const fiveDayForecast = dailyForecast.slice(0, 5);
  const weekendForecast = dailyForecast.filter((item) => {
    const day = new Date(item.dt * 1000).getDay();
    return day === 0 || day === 6;
  });
  const isOddFiveDay = fiveDayForecast.length % 2 !== 0;
  const isOddWeekend = weekendForecast.length % 2 !== 0;

  return (
    <div className="mt-4">
      <div className="forecast-switch mb-4">
        <button
          type="button"
          className={`btn ${view === 'hourly' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
          onClick={() => setView('hourly')}
        >
          На 24 години
        </button>
        <button
          type="button"
          className={`btn ${view === 'daily' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
          onClick={() => setView('daily')}
        >
          На 5 днів
        </button>
        <button
          type="button"
          className={`btn ${view === 'weekend' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
          onClick={() => setView('weekend')}
        >
          На вихідні
        </button>
      </div>

      {view === 'hourly' && (
        <div className="forecast-grid forecast-grid--hourly">
          {threeHourForecast.map((item) => (
            <div className="forecast-grid__item" key={item.dt}>
              <ForecastCard
                title={formatTime(item.dt)}
                icon={item.weather[0].icon}
                temp={`${Math.round(item.main.temp)}°C`}
              />
            </div>
          ))}
        </div>
      )}

      {view === 'daily' && (
        <div className="forecast-grid forecast-grid--daily">
          {fiveDayForecast.map((item, index) => {
            const isLastOdd = isOddFiveDay && index === fiveDayForecast.length - 1;
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
      )}

      {view === 'weekend' && (
        weekendForecast.length ? (
          <div className="forecast-grid forecast-grid--weekend">
            {weekendForecast.map((item, index) => {
              const isLastOdd = isOddWeekend && index === weekendForecast.length - 1;
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
        ) : (
          <div className="text-muted">Немає даних для вихідних</div>
        )
      )}
    </div>
  );
};

export default WeatherForecast;
