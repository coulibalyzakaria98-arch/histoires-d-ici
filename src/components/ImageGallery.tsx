import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageGallery.css';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="gallery-container">
      <div className="gallery-layout">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            className="gallery-thumb"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedIdx(idx)}
          >
            <img src={img} alt={`Galerie ${idx}`} />
            <div className="thumb-overlay">🔍</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-lightbox" onClick={() => setSelectedIdx(null)}>
              <X size={32} />
            </button>
            
            <div className="lightbox-content">
              <img src={images[selectedIdx]} alt="Plein écran" />
            </div>

            <div className="lightbox-nav">
              <button 
                onClick={() => setSelectedIdx(selectedIdx > 0 ? selectedIdx - 1 : images.length - 1)}
                className="nav-btn"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={() => setSelectedIdx(selectedIdx < images.length - 1 ? selectedIdx + 1 : 0)}
                className="nav-btn"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
