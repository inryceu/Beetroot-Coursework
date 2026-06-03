import { Card, Row, Col } from 'react-bootstrap';
import { formatDay } from '../utils/formatDate';

const CurrentWeather = ({ data, city }) => {
  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const description = data.weather[0].description;
  const capitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <Card className="mb-4 border-0 current-weather">
      <Card.Body className="p-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="display-5 fw-bold mb-0 text-white">{city}</h2>
            <p className="text-light mb-3">{formatDay(data.dt)}</p>
            <h1 className="display-1 fw-bold mb-0 text-white">
              {Math.round(data.main.temp)}°C
            </h1>
            <p className="fs-5 mb-0 text-light">{capitalizedDesc}</p>
          </Col>
          
          <Col md={6} className="text-md-end text-center mt-4 mt-md-0">
            <img 
              src={iconUrl} 
              alt={description} 
              className="current-weather__icon"
            />
            <div className="current-weather__details">
              <div className="current-weather__detail-item">
                <small className="d-block text-light">Відчувається як </small>
                <span className="fw-semibold text-white">{Math.round(data.main.feels_like)}°C</span>
              </div>
              <div className="current-weather__detail-item">
                <small className="d-block text-light">Вологість </small>
                <span className="fw-semibold text-white">{data.main.humidity}%</span>
              </div>
              <div className="current-weather__detail-item">
                <small className="d-block text-light">Вітер </small>
                <span className="fw-semibold text-white">{data.wind.speed} м/с</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeather;