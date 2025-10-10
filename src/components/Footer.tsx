import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Autorines Diamantados</h3>
            <p>Especialistas en restauración y diamantado de rines de lujo en Cartagena, Colombia.</p>
            <div className="social-links">
              <a 
                href="https://instagram.com/rinediamantados_ctg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                📸 Instagram
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Diamantado Premium</a></li>
              <li><a href="#servicios">Restauración Completa</a></li>
              <li><a href="#servicios">Personalización</a></li>
              <li><a href="#servicios">Mantenimiento</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Transversal 54, Bosque #21A-17</li>
              <li>🏙️ Cartagena, Colombia</li>
              <li>📱 +57 (300) 123-4567</li>
              <li>📧 info@autorinesdiamantados.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horarios</h4>
            <ul>
              <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 8:00 AM - 2:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Autorines Diamantados. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ para la excelencia en restauración</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
