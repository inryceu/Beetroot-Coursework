import { Card } from 'react-bootstrap';

const ForecastCard = ({ title, icon, temp, subtitle }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Card className="text-center shadow-sm h-100 border-0">
      <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center">
        <div className="fw-semibold mb-1">{title}</div>
        {subtitle && <div className="text-muted small">{subtitle}</div>}
        <img 
          src={iconUrl} 
          alt="Weather icon" 
          style={{ width: '60px', height: '60px' }} 
        />
        <div className="fw-bold fs-5">{temp}</div>
      </Card.Body>
    </Card>
  );
};

export default ForecastCard;