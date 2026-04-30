import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './AudioPlayerEnhanced.css';

interface AudioPlayerEnhancedProps {
  audioSrc: string;
  themeColor: string;
}

const AudioPlayerEnhanced: React.FC<AudioPlayerEnhancedProps> = ({ audioSrc, themeColor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  return (
    <motion.div 
      className="enhanced-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="visualizer-waves">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="wave-bar"
            style={{ backgroundColor: themeColor }}
            animate={{ 
              height: isPlaying ? [10, 30 + Math.random() * 40, 10] : 10 
            }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              delay: i * 0.05 
            }}
          />
        ))}
      </div>

      <div className="player-main-controls">
        <button onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)} className="ctrl-btn">
          <RotateCcw size={20} />
        </button>

        <motion.button 
          onClick={togglePlay}
          className="play-hex-btn"
          style={{ backgroundColor: themeColor }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" />}
        </motion.button>

        <button onClick={() => audioRef.current && (audioRef.current.currentTime += 10)} className="ctrl-btn">
          <RotateCw size={20} />
        </button>
      </div>

      <div className="enhanced-progress-bar">
        <div className="track-bg">
          <motion.div 
            className="fill-bar" 
            style={{ backgroundColor: themeColor }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayerEnhanced;
