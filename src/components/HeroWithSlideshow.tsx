import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HeroWithSlideshow.css';

interface HeroWithSlideshowProps {
  site: {
    id: string;
    name: string;
    location: string;
    tagline: string;
    themeColor: string;
    galleryImages?: string[];
    imageUrl: string;
    stats?: { label: string; value: string }[];
  };
}

const HeroWithSlideshow: React.FC<HeroWithSlideshowProps> = ({ site }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = site.galleryImages && site.galleryImages.length > 0 
    ? site.galleryImages 
    : [site.imageUrl];

  // Gestion de l'icône dynamique
  const getEmoji = (id: string) => {
    if (id === 'cascade-man') return "💧";
    if (id === 'village-kong') return "🏛️";
    return "🏔️";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow-hero-container">
      {/* 1. Fond Animé (Slideshow avec fondu enchaîné) */}
      <div className="hero-slides-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hero-slide-item"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </AnimatePresence>
        <div className="hero-vignette-overlay" />
      </div>

      {/* 2. Navigation & Contenu */}
      <div className="hero-foreground-content container">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="hero-back-btn group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Retour
        </motion.button>

        <div className="hero-text-center">
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="main-site-emoji-hero"
          >
            {getEmoji(site.id)}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="hero-site-title">{site.name}</h1>
            <p className="hero-site-tagline">{site.tagline}</p>
            
            <div className="hero-location-badge" style={{ borderColor: `${site.themeColor}50` }}>
              <MapPin size={18} />
              <span>{site.location}</span>
            </div>
          </motion.div>

          {/* 3. Stats en Glassmorphisme Thématique */}
          {site.stats && (
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-stats-glass-row"
            >
              {site.stats.map((stat, idx) => (
                <div key={idx} className="glass-stat-item">
                  <span className="gs-val" style={{ color: site.themeColor }}>{stat.value}</span>
                  <span className="gs-lab">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* 4. Indicateurs de Slides Thématiques */}
        <div className="hero-slide-dots">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`slide-dot ${idx === currentIndex ? 'active' : ''}`}
              style={{ 
                backgroundColor: idx === currentIndex ? site.themeColor : 'rgba(255,255,255,0.3)',
                width: idx === currentIndex ? '30px' : '8px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroWithSlideshow;
