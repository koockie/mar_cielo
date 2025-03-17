import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Opiniones from './pages/Opiniones';
import Fotos from './pages/Fotos';
import Contacto from './pages/Contacto';
import Turismo from './pages/Turismo';
import Ubicacion from './pages/Ubicacion';
import Arrendatario from './pages/Arrendatario';
import './App.css';

function App() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/opiniones">Opiniones</Link>
        <Link to="/fotos">Fotos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/turismo">Turismo</Link>
        <Link to="/ubicacion">Ubicación</Link>
        <Link to="/arrendatario">Arrendatario</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opiniones" element={<Opiniones />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/arrendatario" element={<Arrendatario />} />
      </Routes>
    </div>
  );
}

export default App;
