import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mini Sena. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/">Inicio</a>
        <a href="/about">Nosotros</a>
        <a href="/contact">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
