import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, X, Download } from 'lucide-react';
import './QRCodeDisplay.css';

interface QRCodeDisplayProps {
  siteId: string;
  siteName: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ siteId, siteName }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // URL complète pour le QR Code (on utilise window.location.origin pour le prototype)
  const siteUrl = `${window.location.origin}/site/${siteId}`;

  return (
    <div className="qrcode-container">
      <button className="qr-toggle-btn" onClick={() => setIsOpen(true)}>
        <QrCode size={18} />
        <span>Générer QR Code</span>
      </button>

      {isOpen && (
        <div className="qr-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="qr-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            
            <div className="qr-header">
              <h3>QR Code de visite</h3>
              <p>{siteName}</p>
            </div>

            <div className="qr-code-wrapper">
              <QRCodeSVG 
                value={siteUrl} 
                size={256}
                level="H"
                includeMargin={true}
              />
            </div>

            <p className="qr-instructions">
              Scannez ce code pour accéder directement aux récits de ce site.
            </p>

            <button className="download-btn" onClick={() => window.print()}>
              <Download size={18} />
              Imprimer le code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeDisplay;
