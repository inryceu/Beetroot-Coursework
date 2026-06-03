import { useState } from 'react';
import SearchForm from './SearchItems/SearchForm';
import SearchHistory from './SearchItems/SearchHistory';

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
      <SearchForm 
        city={city} 
        onCityChange={setCity} 
        onSubmit={handleSubmit} 
      />
      
      <SearchHistory 
        history={history} 
        onHistoryClick={handleHistoryClick} 
      />
    </div>
  );
};

export default SearchBar;