// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: For styling

const NavBar = ({ routes }) => {
  // Extract main menu items (routes with parentRouteId === 1)
  const mainMenus = routes.filter(route => route.parentRouteId === 6);

  return (
    <nav className="navbar">
      <ul className="main-menu">
        {mainMenus.map(main => (
          <li key={main.id}>
            <Link to={main.name}>{main.mainMenu}</Link>
            {/* Check if there are sub-menu items */}
            {main.children && main.children.length > 0 && (
              <ul className="sub-menu">
                {main.children.map(sub => (
                  <li key={sub.id}>
                    <Link to={sub.name}>{sub.subMenu}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
