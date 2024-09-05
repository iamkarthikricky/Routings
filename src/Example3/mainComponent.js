// MainComponent.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecursiveComponent from './recursiveComponent';

const MainComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/summary/*" element={<RecursiveComponent parentRouteId={32} />} />
        <Route path="/mypay/*" element={<RecursiveComponent parentRouteId={33} />} />
        <Route path="/managetax/*" element={<RecursiveComponent parentRouteId={34} />} />
        {/* Add more top-level routes as needed */}
      </Routes>
    </Router>
  );
};

export default MainComponent;
