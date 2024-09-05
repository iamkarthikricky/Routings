import React from 'react';

const NavBar = ({ routes, onNavItemClick }) => {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.id} onClick={() => onNavItemClick(route.name)}>
            {route.mainMenu} {route.subMenu && `- ${route.subMenu}`}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
