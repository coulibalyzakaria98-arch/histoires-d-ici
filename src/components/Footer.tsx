import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-flag-line">
        <div className="f-orange"></div>
        <div className="f-white"></div>
        <div className="f-green"></div>
      </div>
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Histoires d'ici</h3>
          <p>Valorisons ensemble les mémoires et les territoires de Côte d'Ivoire.</p>
        </div>
        
        <div className="footer-links">
          <a href="#">À propos</a>
          <a href="#">Partenaires</a>
          <a href="#">Contact</a>
          <a href="#">Mentions légales</a>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Histoires d'ici • Un voyage dans le patrimoine ivoirien</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
