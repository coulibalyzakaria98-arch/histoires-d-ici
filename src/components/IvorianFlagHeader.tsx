import React from 'react';

const IvorianFlagHeader: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '6px',
      display: 'flex',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ flex: 1, backgroundColor: '#F77F00' }} />
      <div style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
      <div style={{ flex: 1, backgroundColor: '#009B48' }} />
    </div>
  );
};

export default IvorianFlagHeader;
