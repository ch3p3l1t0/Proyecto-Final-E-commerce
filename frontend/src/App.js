import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Asegúrate de tener esta página creada.

import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
