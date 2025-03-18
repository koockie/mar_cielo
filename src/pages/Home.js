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
            <button className="btn-wsp" onClick={() => window.open('https://wa.me/569XXXXXXXX', '_blank')}>
              Contactar por WhatsApp
            </button>
            <button className="btn-airbnb" onClick={() => window.open('https://www.airbnb.com/users/show/XXXXXXXX', '_blank')}>
              Reservar en Airbnb
            </button>
            <button className="btn-cerrar" onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
