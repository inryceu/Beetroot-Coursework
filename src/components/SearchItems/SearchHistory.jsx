import { Button } from 'react-bootstrap';

const SearchHistory = ({ history, onHistoryClick }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-3 d-flex gap-2 flex-wrap align-items-center">
      <span className="text-muted small mb-0">Останні пошуки:</span>
      {history.map((historyItem, index) => (
        <Button
          key={index}
          variant="outline-secondary"
          size="sm"
          className="rounded-pill px-3"
          onClick={() => onHistoryClick(historyItem)}
        >
          {historyItem}
        </Button>
      ))}
    </div>
  );
};

export default SearchHistory;