import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sites, stories } from '../data/mock';
import { X } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import './StoryView.css';

const StoryView = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  
  const story = stories.find(s => s.id === storyId);
  const site = sites.find(s => s.id === story?.siteId);

  if (!story || !site) return <div>Histoire non trouvée</div>;

  // Utilisation d'un audio de démo pour le prototype
  const demoAudio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  return (
    <div className="story-view fade-in">
      <header className="story-header">
        <div className="container header-inner">
          <div className="story-info-mini">
            <span className="site-name">{site.name}</span>
            <span className="story-title-mini">{story.title}</span>
          </div>
          <button onClick={() => navigate(`/site/${site.id}`)} className="close-btn">
            <X size={24} />
          </button>
        </div>
      </header>

      <main className="story-content-immersive">
        <div className="container content-inner">
          <article className="reading-area">
            <h1>{story.title}</h1>
            <p className="author-tag">Raconté par {story.author}</p>
            <div className="story-text">
              {story.content.split('\n').map((para, i) => (para.trim() && (
                <p key={i}>{para}</p>
              )))}
            </div>
          </article>
        </div>
      </main>

      <footer className="audio-player-bar">
        <div className="container player-inner">
          <AudioPlayer 
            audioSrc={(story.audioUrl && story.audioUrl !== '#') ? story.audioUrl : demoAudio} 
            themeColor={site.themeColor} 
          />
        </div>
      </footer>
    </div>
  );
};

export default StoryView;
