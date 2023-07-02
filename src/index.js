import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantsPage from './pages/restaurants';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
      </Routes>
    </Router>
  );
};

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
