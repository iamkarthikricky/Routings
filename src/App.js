import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

const HiElement = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="employees">Employees</Link></li>
        </ul>
      </nav>
      <Outlet />
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    </div>
  );
};

const Dashboard = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="stats">Stats</Link></li>
        </ul>
      </nav>
      <Outlet />
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    </div>
  );
};

const Demo = ({ children }) => {
  return (
    <div>
      <Link to="demo">Demo</Link>
      <Outlet />
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    </div>
  );
};

const freeDemo = () => {
  return <p>Free Demo</p>;
};

const routes = [
  {
    path: "/",
    component: HiElement,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
        children: [
          {
            path: 'stats',
            component: Demo,
            children: [
              { path: 'demo', component: freeDemo },
            ],
          },
        ],
      },
    ],
  },
];

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.children) {
      const NavbarLinks = route.children.map((childRoute, childIndex) => (
        <li key={childIndex}>
          <Link to={childRoute.path}>{childRoute.path.replace('/', '')}</Link>
        </li>
      ));

      return (
        <Route
          key={index}
          path={route.path}
          element={<route.component>{NavbarLinks}</route.component>}
        >
          {renderRoutes(route.children)}
        </Route>
      );
    } else {
      return (
        <Route key={index} path={route.path} element={<route.component />} />
      );
    }
  });
};

const MainComponent = () => {
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
};

export default MainComponent;
