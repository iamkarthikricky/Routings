// MainComponent.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import nestedRoutes from './routes';
import componentMapping from './components'; // Adjust the path as needed

const renderRoutes = (routes) => {
  return routes.map((route) => {
    const Component = componentMapping[route.componentName];

    if (!Component) {
      console.warn(`Component "${route.componentName}" not found.`);
      return null;
    }

    return (
      <>
      <NavBar routes={nestedRoutes} />
      <Route key={route.id} path={route.name} element={<Component />}>
        {route.children && renderRoutes(route.children)}
      </Route>
      </>
    );
  });
};

const MainComponent = () => {
  return (
    <Router>
      <NavBar routes={nestedRoutes} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {renderRoutes(nestedRoutes)}
            {/* Optionally, add a default route */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default MainComponent;
