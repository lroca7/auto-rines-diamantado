import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nosotros</h2>
            <p className="about-description">
              En Autorines Diamantados, somos especialistas en la restauración y diamantado de rines de lujo. 
              Somos un nuevo servicio en Cartagena, hemos perfeccionado técnicas que 
              transforman rines dañados en obras de arte brillantes.
            </p>
            
            <div className="about-features">              
              <div className="about-feature">
                <h3>📍 Ubicación</h3>
                <p>Transversal 54, Bosque #21A-17 - Cartagena, Colombia</p>
              </div>
              <div className="about-feature">
                <h3>💼 Especialización</h3>
                <p>Enfocados exclusivamente en rines de lujo</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Rines Restaurados</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Satisfacción</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Respuesta</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">🔧</span>
                <p>Imagen de nuestro taller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
