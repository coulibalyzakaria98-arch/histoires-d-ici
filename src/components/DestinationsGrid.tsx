import React from 'react';
import { motion } from 'framer-motion';
import { sites } from '../data/mock';
import DestinationCard from './DestinationCard';
import './DestinationsGrid.css';

const DestinationsGrid: React.FC = () => {
  return (
    <section className="destinations-section container">
      <div className="section-intro">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          ✨ Destinations à la une
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          Quatre destinations, une même promesse : faire vivre les mémoires de Côte d’Ivoire.
        </motion.p>
      </div>
      
      <div className="destinations-grid-4-cols">
        {sites.map((site, idx) => (
          <DestinationCard key={site.id} site={site} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default DestinationsGrid;
