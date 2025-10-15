import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
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
              <a href="#contacto" className="btn btn-secondary">
                Cotizar Ahora
              </a>
            </div>
          </div>
         
          {/* <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Servicio Rápido</h3>
              <p>Tiempos de entrega optimizados</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3>Calidad Premium</h3>
              <p>Materiales y técnicas de primera</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Garantía Total</h3>
              <p>Respaldamos nuestro trabajo</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
