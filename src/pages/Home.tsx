import React from 'react';
import Hero from '../components/Hero';
import DestinationsGrid from '../components/DestinationsGrid';
import InteractiveMap from '../components/InteractiveMap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <main>
        <DestinationsGrid />
        <InteractiveMap />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
