import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, MapPin } from 'lucide-react';
import { Site } from '../types';
import './DestinationCard.css';

interface DestinationCardProps {
  site: Site;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ site, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="site-card-premium-wrapper"
    >
      {/* Image avec Overlay Graduel */}
      <div className="card-media-box" onClick={() => navigate(`/site/${site.id}`)}>
        <img
          src={site.imageUrl}
          alt={site.name}
          className="card-main-img"
        />
        <div className="card-top-location">
          <MapPin size={12} />
          <span>{site.location.split(',')[0]}</span>
        </div>
      </div>

      {/* Contenu Texte */}
      <div className="card-premium-body">
        <h3 className="card-premium-title">{site.name}</h3>
        <p className="card-premium-tagline">{site.tagline}</p>

        {/* Actions de la carte */}
        <div className="card-premium-actions">
          <button
            onClick={() => navigate(`/site/${site.id}`)}
            className="btn-listen-action"
            style={{ backgroundColor: site.themeColor }}
          >
            <Headphones size={16} />
            <span>Écouter</span>
          </button>
          <button
            onClick={() => navigate(`/site/${site.id}`)}
            className="btn-details-action"
          >
            Détails →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
