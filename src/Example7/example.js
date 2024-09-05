import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './example.css';

const routesData = [
  {
    id: 43,
    name: '/dashboard',
    componentName: 'Dashboard',
    mainMenu: 'Dashboard',
    component: () => <h2>Dashboard Content</h2>,
    children: []
  },
  {
    id: 44,
    name: '/employees',
    componentName: 'Employees',
    mainMenu: 'Employees',
    component: () => <h2>Employees Content</h2>,
    children: [
      { id: 47, name: '/employees/directory', mainMenu: 'Employee Directory', component: () => <h3>Employee Directory</h3> },
      { id: 48, name: '/employees/profilechanges', mainMenu: 'Profile Changes', component: () => <h3>Profile Changes</h3>, children: [
          { id: 49, name: '/employees/profilechanges/approvals', mainMenu: 'Profile Approvals', component: () => <h4>Profile Approvals</h4> },
          { id: 50, name: '/employees/profilechanges/pastchanges', mainMenu: 'Past Changes', component: () => <h4>Past Changes</h4> },
        ]
      }
    ]
  },
  {
    id: 45,
    name: '/orgstructure',
    componentName: 'OrgStructure',
    mainMenu: 'Org Structure',
    component: () => <h2>Org Structure Content</h2>,
    children: []
  },
  {
    id: 46,
    name: '/onboarding',
    componentName: 'Onboarding',
    mainMenu: 'Onboarding',
    component: () => <h2>Onboarding Content</h2>,
    children: []
  }
];

const NavbarItem = ({ route, activeItem, setActiveItem }) => {
  const isActive = activeItem === route.id;
  const hasChildren = route.children && route.children.length > 0;

  const handleClick = (e) => {
    e.preventDefault();
    setActiveItem(isActive ? null : route.id);
  };

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={route.name} onClick={handleClick}>
        {route.mainMenu}
      </NavLink>

      {hasChildren && isActive && (
        <ul className="sub-navbar">
          {route.children.map((childRoute) => (
            <NavbarItem
              key={childRoute.id}
              route={childRoute}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = ({ routesData }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const currentRoute = routesData.find(route => location.pathname.startsWith(route.name));
    if (currentRoute && currentRoute.id !== activeItem) {
      setActiveItem(currentRoute.id);
    }
  }, [location, activeItem, routesData]);

  return (
    <nav>
      <ul className="main-navbar">
        {routesData.map((route) => (
          <NavbarItem
            key={route.id}
            route={route}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
    </nav>
  );
};

const RenderRoutes = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Route key={route.id} path={route.name} element={<route.component />}>
          {route.children && <RenderRoutes routes={route.children} />}
        </Route>
      ))}
    </>
  );
};

const App = () => (
  <Router>
    <Navbar routesData={routesData} />
    <Routes>
      <RenderRoutes routes={routesData} />
    </Routes>
  </Router>
);

export default App;
