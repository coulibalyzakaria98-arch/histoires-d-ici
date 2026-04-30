import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2 } from 'lucide-react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  audioSrc: string;
  themeColor: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, themeColor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(formatTime(audioRef.current.duration));
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="player-controls-row">
        <button onClick={() => skip(-10)} className="skip-btn"><RotateCcw size={20} /></button>
        
        <button 
          onClick={togglePlay} 
          className="main-play-btn" 
          style={{ backgroundColor: themeColor }}
        >
          {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" />}
        </button>
        
        <button onClick={() => skip(10)} className="skip-btn"><RotateCw size={20} /></button>
      </div>

      <div className="progress-section">
        <span className="time-display">{currentTime}</span>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%`, backgroundColor: themeColor }}
          ></div>
        </div>
        <span className="time-display">{duration}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
