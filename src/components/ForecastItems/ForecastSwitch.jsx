import React from 'react';

const ForecastSwitch = ({ view, onViewChange }) => {
  return (
    <div className="forecast-switch mb-4">
      <button
        type="button"
        className={`btn ${view === 'hourly' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
        onClick={() => onViewChange('hourly')}
      >
        На 24 години
      </button>
      <button
        type="button"
        className={`btn ${view === 'daily' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
        onClick={() => onViewChange('daily')}
      >
        На 5 днів
      </button>
      <button
        type="button"
        className={`btn ${view === 'weekend' ? 'btn-primary' : 'btn-outline-primary'} forecast-switch__btn`}
        onClick={() => onViewChange('weekend')}
      >
        На вихідні
      </button>
    </div>
  );
};

export default ForecastSwitch;