import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Génère 12 particules pour l'effet visuel
    setParticles(Array.from({ length: 12 }, (_, i) => i));
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-animation-overlay">
        {particles.map((p) => (
          <div key={p} className={`particle p-${p}`} />
        ))}
      </div>

      <div className="hero-content fade-in">
        <div className="hero-badge">🌍 Plateforme Nationale</div>
        <h1 className="hero-title">Histoires d'ici</h1>
        <p className="hero-subtitle">
          Explorez les récits cachés de nos territoires.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-dot dot-terracotta"></span>
            <strong>3</strong> sites
          </div>
          <div className="stat-item">
            <span className="stat-dot dot-nature"></span>
            <strong>8</strong> histoires
          </div>
          <div className="stat-item">
            <span className="stat-dot dot-gold"></span>
            <strong>100%</strong> immersif
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
