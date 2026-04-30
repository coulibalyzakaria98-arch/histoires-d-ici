import React from 'react';
import { motion } from 'framer-motion';
import './TimelineSection.css';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title: string;
  themeColor: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ items, title, themeColor }) => {
  return (
    <div className="timeline-container">
      <h3 className="timeline-main-title">{title}</h3>
      <div className="timeline-relative">
        <div 
          className="timeline-line hidden md:block" 
          style={{ background: `linear-gradient(to bottom, ${themeColor}, #E0A343)` }}
        />
        
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div 
              className="timeline-dot hidden md:block" 
              style={{ backgroundColor: themeColor }}
            />
            
            <div className="timeline-content-card">
              <div className="timeline-header">
                <span className="timeline-icon">{item.icon}</span>
                <span className="timeline-year" style={{ color: themeColor }}>{item.year}</span>
              </div>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
