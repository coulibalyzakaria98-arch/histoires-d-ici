import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { sites } from '../data/mock';
import { useNavigate } from 'react-router-dom';

// Custom DivIcon for more aesthetic markers
const createCustomIcon = (color: string) => L.divIcon({
  html: `<div style="
    background-color: ${color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  "></div>`,
  className: 'custom-marker',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const InteractiveMap = () => {
  const navigate = useNavigate();

  return (
    <div className="map-section container">
      <div className="map-header">
        <h2>🗺️ Exploration géographique</h2>
        <p>Retrouvez tous nos sites sur une carte interactive et planifiez votre voyage narratif.</p>
      </div>
      <div className="map-wrapper" style={{ height: '500px', width: '100%', position: 'relative' }}>
        <MapContainer 
          center={[7.5, -5.5]} 
          zoom={6} 
          style={{ height: '100%', width: '100%', borderRadius: '2.5rem' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Carte Interactive Histoires d&apos;ici'
          />
          {sites.map(site => (
            <Marker 
              key={site.id} 
              position={[site.coordinates.lat, site.coordinates.lng]}
              icon={createCustomIcon(site.themeColor)}
            >
              <Popup>
                <div className="map-popup" style={{ minWidth: '150px' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.3rem' }}>{site.name}</strong>
                  <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.85rem', color: '#666' }}>{site.tagline}</p>
                  <button 
                    onClick={() => navigate(`/site/${site.id}`)}
                    style={{
                      background: 'black',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      width: '100%',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Découvrir
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default InteractiveMap;
