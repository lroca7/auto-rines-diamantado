import React from 'react';
import '../styles/Hero.css';
import heroVideo from '../assets/video/rines_video.mp4';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Texto izquierda */}
          <div className="hero-text">
            <h1 className="hero-title">
              Restauración y Diamantado
              <span className="highlight">Premium</span>
            </h1>
            <p className="hero-subtitle">
              Transformamos tus rines de lujo con técnicas especializadas y materiales de la más alta calidad.
              Cada proyecto es una obra de arte que refleja nuestro compromiso con la excelencia.
            </p>
            <div className="hero-buttons">
              <a href="#servicios" className="btn btn-primary">
                Ver Servicios
              </a>
              <a
                href={`https://wa.me/573215050468?text=${encodeURIComponent('Hola! Me gustaría cotizar el servicio de diamantado de rines.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Cotizar Ahora
              </a>
            </div>
          </div>

          {/* Video derecha */}
          <div className="hero-video">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="hero-video-player"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
