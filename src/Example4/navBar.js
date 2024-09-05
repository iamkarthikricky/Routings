import React from 'react';
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getRoutesByParentId } from './utils';

const NavBar = ({ routes }) => {
  const navigate = useNavigate();

  return (
    <>
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f5f5f5' }}>
      {routes.map(route => (
        <div
          key={route.id}
          onClick={() => navigate(`${route.name}`)}
          style={{ cursor: 'pointer', padding: '10px', background: '#7c5fff', color: '#fff' }}
        >
          {route.subMenu || route.mainMenu}
        </div>
     
      ))}
    </nav>
    <Outlet />
    </>
  );
};

const RecursiveComponent = ({ parentRouteId, routesData }) => {
  const location = useLocation();
  const childRoutes = getRoutesByParentId(routesData, parentRouteId=33);

  console.log('childRoutes',childRoutes)

  return (
    <div>
       {childRoutes.length > 0 && (
        <>
          <NavBar routes={childRoutes} />
          {childRoutes.map(route => (
            <Routes key={route.id}>
              <Route
                path={`${route.name}/*`}
                element={<RecursiveComponent parentRouteId={route.id} routesData={routesData} />}
              />
            </Routes>
          ))}
        </>
      )}
    </div>
  );
};

export default RecursiveComponent;
