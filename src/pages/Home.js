import React from 'react';
import './Home.css'; // Archivo CSS separado para estilos

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Bienvenido a Nuestra Cabaña Mar&Cielo</h1>
        <p>🌿Despierta con el sonido del mar, respira la tranquilidad de la naturaleza y sumérgete en una experiencia única. <br />
  <strong>Tu refugio perfecto te espera.</strong> 🌊✨</p>
        <button className="btn-reservar">Reserva Ahora</button>
      </div>
    </div>
  );
}
