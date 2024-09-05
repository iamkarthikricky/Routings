// RecursiveComponent.js
import React from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import NavBar from './navBar';
import { getRoutesByParentId } from './utils';
import { componentMapping } from './componentMapping';

const RecursiveComponent = ({ parentRouteId }) => {
  const location = useLocation();
  const childRoutes = getRoutesByParentId(parentRouteId);

  return (
    <div>
      <h1>{location.pathname}</h1>
      <NavBar routes={childRoutes} />
      <Outlet />
      <Routes>
        {childRoutes.map(route => {
          const Component = componentMapping[route.componentName];
          return (
            <Route key={route.id} path={route.name} element={<Component />}>
              <Route path="*" element={<RecursiveComponent parentRouteId={route.id} />} />
            </Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default RecursiveComponent;
