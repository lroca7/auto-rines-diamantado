import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/autorines.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Autorines Diamantados" />
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#servicios" className="nav-link">Servicios</a></li>
              <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
              <li><a href="#galeria" className="nav-link">Galería</a></li>
              <li><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a
              href="https://instagram.com/rinesdiamantados_ctg"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <span>@rinesdiamantados_ctg</span>
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
