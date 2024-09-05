import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/org-structure">Org Structure</Link></li>
        {/* Add other navigation items here */}
      </ul>
    </nav>
  );
};

export default NavBar;
