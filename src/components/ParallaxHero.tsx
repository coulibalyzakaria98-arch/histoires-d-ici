import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  image: string;
  title: string;
  subtitle: string;
  location: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ image, title, subtitle, location }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[75vh] md:h-[85vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C221B] via-transparent to-transparent" />
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-[#E0A343] font-bold mb-4 tracking-widest uppercase text-sm">
              📍 {location}
            </p>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-white/40 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E0A343]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxHero;
