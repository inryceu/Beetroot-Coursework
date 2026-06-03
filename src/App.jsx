import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChartsPage from './pages/ChartsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;