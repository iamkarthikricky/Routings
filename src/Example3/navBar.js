// NavBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ routes }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.id} onClick={() => navigate(route.name)}>
            {route.subMenu || route.mainMenu}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
