import React, { useState } from 'react';
import './Home.css'; // Archivo CSS separado para estilos

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Bienvenido a Nuestra Cabaña Mar&Cielo</h1>
        <p>🌿Despierta con el sonido del mar, respira la tranquilidad de la naturaleza y sumérgete en una experiencia única. <br />
          <strong>Tu refugio perfecto te espera.</strong> 🌊✨
        </p>
        <button className="btn-reservar" onClick={() => setModalOpen(true)}>Reserva Ahora</button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Elige una opción de reserva</h2>
            <button className="btn-wsp" onClick={() => window.open('https://wa.me/56987184573', '_blank')}>
              Contactar por WhatsApp
            </button>
            <button className="btn-airbnb" onClick={() => window.open('https://es-l.airbnb.com/rooms/1050935137395611182?guests=1&adults=1&s=67&unique_share_id=f30ae318-248b-49a6-a54e-094a62c4178a', '_blank')}>
              Reservar en Airbnb
            </button>
            <button className="btn-cerrar" onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
