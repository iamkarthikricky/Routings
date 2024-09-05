import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './navBar';
import componentMapping from './componentMapping'; // Import the component mapping
import routesData from '../routesData';

const ParentComponent = ({ parentRouteId }) => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Filter routes based on the parentRouteId
  const filteredRoutes = routesData.filter(route => route.parentRouteId === parentRouteId);

  const handleNavItemClick = (path) => {
    setSelectedRoute(path);
    navigate(path);
  };

  return (
    <div>
      <NavBar routes={filteredRoutes} onNavItemClick={handleNavItemClick} />
      <Routes>
        {filteredRoutes.map(route => {
          const Component = componentMapping[route.componentName];
          return <Route key={route.id} path={route.name} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
};

export default ParentComponent;
