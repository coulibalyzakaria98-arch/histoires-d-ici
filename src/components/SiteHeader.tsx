import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import './SiteHeader.css';

interface SiteHeaderProps {
  site: {
    id: string;
    name: string;
    location: string;
    tagline: string;
    themeColor: string;
    stats?: { label: string; value: string }[];
  };
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ site }) => {
  const navigate = useNavigate();

  // Icône principale basée sur l'ID
  const getMainIcon = (id: string) => {
    if (id === 'rocher-amoureux') return "🏔️";
    if (id === 'cascade-man') return "🌊";
    return "🕌";
  };

  return (
    <div className="site-header-container">
      {/* Bouton retour animé */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="back-btn-premium group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
        Retour aux destinations
      </motion.button>

      {/* Carte Hero Glassmorphisme */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="glass-hero-card"
      >
        {/* Blobs de décoration en arrière-plan */}
        <div className="glass-blob blob-1" style={{ backgroundColor: site.themeColor }}></div>
        <div className="glass-blob blob-2" style={{ backgroundColor: '#E0A343' }}></div>

        <div className="glass-content-inner">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="main-site-emoji"
          >
            {getMainIcon(site.id)}
          </motion.div>

          <h1 className="site-main-title">{site.name}</h1>
          <p className="site-main-tagline">{site.tagline}</p>

          <div className="site-location-badge" style={{ backgroundColor: `${site.themeColor}15`, color: site.themeColor }}>
            <MapPin size={16} />
            <span>{site.location}, Côte d'Ivoire</span>
          </div>

          {/* Mini Badges / Stats */}
          {site.stats && (
            <div className="header-stats-row">
              {site.stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="header-mini-badge"
                >
                  <span className="h-badge-val">{stat.value}</span>
                  <span className="h-badge-lab">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SiteHeader;
