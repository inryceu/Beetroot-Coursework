import { Card, Row, Col } from 'react-bootstrap';
import { formatDay } from '../utils/formatDate';

const CurrentWeather = ({ data, city }) => {
  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const description = data.weather[0].description;
  const capitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <Card className="mb-4 shadow-sm border-0 bg-primary text-white">
      <Card.Body className="p-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="display-5 fw-bold mb-0">{city}</h2>
            <p className="text-light mb-2">{formatDay(data.dt)}</p>
            <h1 className="display-1 fw-bold mb-0">
              {Math.round(data.main.temp)}°C
            </h1>
            <p className="fs-5 mb-0">{capitalizedDesc}</p>
          </Col>
          
          <Col md={6} className="text-md-end text-center mt-3 mt-md-0">
            <img 
              src={iconUrl} 
              alt={description} 
              style={{ width: '150px', height: '150px', objectFit: 'contain' }} 
            />
            <div className="d-flex justify-content-md-end justify-content-center gap-3 mt-2">
              <div>
                <small className="d-block text-light">Відчувається як </small>
                <span className="fw-semibold">{Math.round(data.main.feels_like)}°C</span>
              </div>
              <div>
                <small className="d-block text-light">Вологість </small>
                <span className="fw-semibold">{data.main.humidity}%</span>
              </div>
              <div>
                <small className="d-block text-light">Вітер </small>
                <span className="fw-semibold">{data.wind.speed} м/с</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeather;