import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImmersiveGallery.css';

interface ImmersiveGalleryProps {
  images: string[];
  title: string;
}

const ImmersiveGallery: React.FC<ImmersiveGalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="immersive-gallery-wrapper">
      {/* Grille de miniatures */}
      <div className="immersive-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-card"
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(idx)}
          >
            <img src={img} alt={`${title} ${idx}`} />
            <div className="gallery-overlay">
              <span>Voir en grand</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox (Plein écran) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lb-close" onClick={closeLightbox}><X size={32} /></button>
            
            <div className="lb-main-container">
              <button className="lb-nav-btn prev" onClick={prevImage}><ChevronLeft size={48} /></button>
              
              <motion.img 
                key={selectedIndex}
                src={images[selectedIndex]} 
                className="lb-image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              />
              
              <button className="lb-nav-btn next" onClick={nextImage}><ChevronRight size={48} /></button>
            </div>

            <div className="lb-thumbnails">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`lb-thumb-item ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(idx); }}
                >
                  <img src={img} alt="thumb" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImmersiveGallery;
