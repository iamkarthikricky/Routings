import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentComponent from './parentComponent';

const MainComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Render ParentComponent for each top-level parent route */}
        <Route path="/*" element={<ParentComponent parentRouteId={2} />} />
        {/* Add more parent routes as needed */}
      </Routes>
    </Router>
  );
};

export default MainComponent;
