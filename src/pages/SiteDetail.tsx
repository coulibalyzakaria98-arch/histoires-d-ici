import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { sites, stories } from '../data/mock';
import { Clock, Info, BookOpen, Headphones, Image as ImageIcon } from 'lucide-react';
import HeroWithSlideshow from '../components/HeroWithSlideshow';
import AudioPlayerEnhanced from '../components/AudioPlayerEnhanced';
import ImmersiveGallery from '../components/ImmersiveGallery';
import AnimatedSection from '../components/AnimatedSection';
import QRCodeDisplay from '../components/QRCodeDisplay';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import TimelineSection from '../components/TimelineSection';
import './SiteDetail.css';

const SiteDetail = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  
  const site = sites.find(s => s.id === siteId);
  const siteStories = stories.filter(s => s.siteId === siteId);

  if (!site) return <div>Site non trouvé</div>;

  return (
    <div className="site-detail-immersive">
      {/* 1. HERO SLIDESHOW PREMIUM (Images de fond animées) */}
      <HeroWithSlideshow site={site} />

      <main className="container detail-main-layout">
        {/* 2. SECTION À PROPOS & POINTS CLÉS */}
        <div className="content-split-layout">
          <div className="main-text-col">
            <AnimatedSection delay={0.2}>
              <div className="section-header-flex">
                <h2 className="premium-section-title"><Info size={20} /> À propos du lieu</h2>
                <QRCodeDisplay siteId={site.id} siteName={site.name} />
              </div>
              
              <div className="grid-about-split">
                <div className="desc-box">
                  <p className="premium-description">{site.description}</p>
                </div>
                
                {site.keyPoints && (
                  <GlassCard className="key-points-card">
                    <h3 className="small-title">Points clés</h3>
                    <ul className="key-points-list">
                      {site.keyPoints.map((point, idx) => (
                        <li key={idx}>
                          <span className="point-icon">{point.icon}</span>
                          <span className="point-text">{point.text}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                )}
              </div>
            </AnimatedSection>

            {/* 3. Chronique Timeline */}
            {site.timeline && (
              <AnimatedSection delay={0.3}>
                <TimelineSection 
                  items={site.timeline} 
                  title="📅 Chronique d'une légende" 
                  themeColor={site.themeColor}
                />
              </AnimatedSection>
            )}

            {/* 4. Signification Culturelle */}
            {site.culturalSignificance && (
              <AnimatedSection delay={0.35}>
                <div className="cultural-significance-row">
                  {site.culturalSignificance.map((item, idx) => (
                    <GlassCard key={idx} className="significance-card">
                      <div className="significance-icon">{item.icon}</div>
                      <h3 className="significance-title">{item.title}</h3>
                      <p className="significance-content">{item.content}</p>
                    </GlassCard>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* 5. L'HISTOIRE (Mise en valeur) */}
            <AnimatedSection delay={0.4} className="story-highlight-section">
              <h2 className="premium-section-title"><BookOpen size={20} /> L'histoire</h2>
              <div className="immersive-stories-list">
                {siteStories.map(story => (
                  <div key={story.id} className="immersive-story-card">
                    <div className="story-card-info">
                      <h3>{story.title}</h3>
                      <p>{story.excerpt}</p>
                      <div className="story-meta-row">
                        <span style={{ color: site.themeColor }}>Par {story.author}</span>
                        <span className="duration-tag"><Clock size={14} /> {story.duration}</span>
                      </div>
                    </div>
                    
                    <div className="immersive-audio-wrapper">
                      <AudioPlayerEnhanced 
                        audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                        themeColor={site.themeColor} 
                      />
                    </div>

                    <div className="story-text-content-box">
                      {story.content.split('\n').map((para, i) => para.trim() && (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* 6. SIDEBAR MEDIA */}
          <aside className="sidebar-col">
            {site.practicalInfo && (
              <AnimatedSection delay={0.5} className="practical-info-aside">
                <h2 className="section-label">Informations Pratiques</h2>
                <div className="practical-grid">
                  {site.practicalInfo.map((info, idx) => (
                    <div key={idx} className="info-item">
                      <span className="info-icon">{info.icon}</span>
                      <div className="info-text">
                        <p className="info-label" style={{ color: site.themeColor }}>{info.label}</p>
                        <p className="info-value">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection delay={0.6}>
              <h2 className="section-label">Galerie Visuelle</h2>
              <ImmersiveGallery images={site.galleryImages || [site.imageUrl]} title={site.name} />
            </AnimatedSection>

            {site.quote && (
              <AnimatedSection delay={0.8} className="site-quote-box">
                <p>« {site.quote} »</p>
                <small>— Proverbe traditionnel</small>
              </AnimatedSection>
            )}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SiteDetail;
