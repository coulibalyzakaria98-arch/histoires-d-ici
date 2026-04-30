import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IvorianFlagHeader from './components/IvorianFlagHeader';
import Home from './pages/Home';
import SiteDetail from './pages/SiteDetail';
import StoryView from './pages/StoryView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <IvorianFlagHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/site/:siteId" element={<SiteDetail />} />
          <Route path="/story/:storyId" element={<StoryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
