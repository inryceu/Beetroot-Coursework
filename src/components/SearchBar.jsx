import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchBar = ({ onSearch, history }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  const handleHistoryClick = (historyItem) => {
    onSearch(historyItem);
    setCity('');
  };

  return (
    <div className="mb-4">
      <Form onSubmit={handleSubmit}>
        <InputGroup size="lg" className="shadow-sm">
          <Form.Control
            placeholder="Введіть назву міста (наприклад: Київ)"
            aria-label="Місто"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-primary text-dark"
          />
          <Button variant="primary" type="submit" className="px-4 fw-bold">
            Пошук
          </Button>
        </InputGroup>
      </Form>

      {history && history.length > 0 && (
        <div className="mt-3 d-flex gap-2 flex-wrap align-items-center">
          <span className="text-muted small mb-0">Останні пошуки:</span>
          {history.map((historyItem, index) => (
            <Button
              key={index}
              variant="outline-secondary"
              size="sm"
              className="rounded-pill px-3"
              onClick={() => handleHistoryClick(historyItem)}
            >
              {historyItem}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;