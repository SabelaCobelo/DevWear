import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

// Obtener el elemento root del DOM
const rootElement = document.getElementById('root');

// Verificar si el elemento root existe
if (rootElement) {
  // Crear un root de ReactDOM
  const root = ReactDOM.createRoot(rootElement);

  // Renderizar la aplicación
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento root');
}