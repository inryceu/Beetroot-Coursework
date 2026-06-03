import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
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
  );
};

export default SearchBar;