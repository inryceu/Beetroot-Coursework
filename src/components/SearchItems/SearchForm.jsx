import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchForm = ({ city, onCityChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup size="lg" className="shadow-sm">
        <Form.Control
          placeholder="Введіть назву міста (наприклад: Київ)"
          aria-label="Місто"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="border-primary text-dark"
        />
        <Button variant="primary" type="submit" className="px-4 fw-bold">
          Пошук
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;