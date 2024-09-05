import React, { useState } from 'react';
import routesData from '../routesData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Function to convert flat array to a nested tree structure
const buildTree = (data, parentId = null) => {
  let tree = [];
  data.forEach((item) => {
    if (item.parentRouteId === parentId) {
      const children = buildTree(data, item.id);
      if (children.length) {
        item.children = children; // Add children if exist
      }
      tree.push(item);
    }
  });
  return tree;
};

export const nestedRoutes = buildTree(routesData, 6); // Assuming 6 is the root parent id

// Recursive component to render the navigation menus
const NavItem = ({ route, onSelectRoute }) => {
  return (
    <li>
      {/* When a parent route is clicked, call onSelectRoute with the selected route */}
      <Link to={route.name} onClick={() => onSelectRoute(route)}>
        {route.mainMenu}
      </Link>
    </li>
  );
};

// Component to render the entire navigation
const Navigation = ({ routes, onSelectRoute }) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <NavItem key={route.id} route={route} onSelectRoute={onSelectRoute} />
        ))}
      </ul>
    </nav>
  );
};

// Sample component to render based on route
const OrganizationComponent = ({ componentName }) => {
  return <div>{componentName}</div>;
};

// App component with Router setup
const App = () => {
  // State to manage the selected parent route
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Function to handle route selection
  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
  };

  return (
    <Router>
      {/* Navigation component to render parent routes */}
      <Navigation routes={nestedRoutes} onSelectRoute={handleSelectRoute} />
      
      {/* Render child routes when a parent route is selected */}
      {selectedRoute && selectedRoute.children && (
        <nav>
          <ul>
            {selectedRoute.children.map((childRoute) => (
              <li key={childRoute.id}>
                <Link to={childRoute.name}>{childRoute.mainMenu}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Router setup for all routes */}
      <Routes>
        {routesData.map((route) => (
          <Route
            key={route.id}
            path={route.name}
            element={<OrganizationComponent componentName={route.componentName} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
