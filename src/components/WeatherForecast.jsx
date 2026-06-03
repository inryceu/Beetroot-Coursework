import { useState, useMemo } from 'react';
import ForecastSwitch from './ForecastItems/ForecastSwitch';
import HourlyGrid from './Grids/HourlyGrid';
import DailyGrid from './Grids/DailyGrid';

const WeatherForecast = ({ forecastList }) => {
  const [view, setView] = useState('hourly');

  const { threeHour, fiveDay, weekend } = useMemo(() => {
    if (!forecastList) return { threeHour: [], fiveDay: [], weekend: [] };

    const threeHourData = forecastList.slice(0, 8);
    const dailyData = forecastList.filter((_, index) => index % 8 === 0);
    
    const fiveDayData = dailyData.slice(0, 5);
    const weekendData = dailyData.filter((item) => {
      const day = new Date(item.dt * 1000).getDay();
      return day === 0 || day === 6;
    });

    return { 
      threeHour: threeHourData, 
      fiveDay: fiveDayData, 
      weekend: weekendData 
    };
  }, [forecastList]);

  return (
    <div className="mt-4">
      <ForecastSwitch view={view} onViewChange={setView} />

      {view === 'hourly' && <HourlyGrid data={threeHour} />}
      
      {view === 'daily' && <DailyGrid data={fiveDay} gridClassModifier="daily" />}
      
      {view === 'weekend' && <DailyGrid data={weekend} gridClassModifier="weekend" />}
    </div>
  );
};

export default WeatherForecast;