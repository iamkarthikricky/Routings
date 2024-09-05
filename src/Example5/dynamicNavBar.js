import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Outlet } from 'react-router-dom';

// Sample routesData array
const routesData = [
  { id: 35, name: "/mysalary", componentName: "MySalaryComponent", mainMenu: "MY PAY", subMenu: "My Salary", parentRouteId: 33 },
  { id: 36, name: "/payslips", componentName: "PaySlipsComponent", mainMenu: "MY PAY", subMenu: "Pay Slips", parentRouteId: 33 },
  { id: 37, name: "/incometax", componentName: "IncomeTaxComponent", mainMenu: "MY PAY", subMenu: "Income Tax", parentRouteId: 33 },
  { id: 38, name: "/declaration", componentName: "DeclarationComponent", mainMenu: "MANAGE TAX", subMenu: "Declaration", parentRouteId: 34 },
  { id: 39, name: "/previousname", componentName: "PreviousNameComponent", mainMenu: "MANAGE TAX", subMenu: "Previous Name", parentRouteId: 34 },
  { id: 40, name: "/form12bb", componentName: "Form12BBComponent", mainMenu: "MANAGE TAX", subMenu: "FORM 12BB", parentRouteId: 34 },
  { id: 41, name: "/taxfilling", componentName: "TaxFillingComponent", mainMenu: "MANAGE TAX", subMenu: "Tax Filling", parentRouteId: 34 },
  { id: 42, name: "/taxsavinginvestment", componentName: "TaxSavingInvestmentComponent", mainMenu: "MANAGE TAX", subMenu: "Tax Saving Investment", parentRouteId: 34 },
];

// Dummy components for illustration
const MySalaryComponent = () => <div>My Salary Component</div>;
const PaySlipsComponent = () => <div>Pay Slips Component</div>;
const IncomeTaxComponent = () => <div>Income Tax Component</div>;
const DeclarationComponent = () => <div>Declaration Component</div>;
const PreviousNameComponent = () => <div>Previous Name Component</div>;
const Form12BBComponent = () => <div>Form 12BB Component</div>;
const TaxFillingComponent = () => <div>Tax Filling Component</div>;
const TaxSavingInvestmentComponent = () => <div>Tax Saving Investment Component</div>;

// Map component names to actual components
const componentMap = {
  MySalaryComponent,
  PaySlipsComponent,
  IncomeTaxComponent,
  DeclarationComponent,
  PreviousNameComponent,
  Form12BBComponent,
  TaxFillingComponent,
  TaxSavingInvestmentComponent,
};

function DynamicNavbar() {
  const location = useLocation();
  const [activeParent, setActiveParent] = useState(null);

  useEffect(() => {
    // Determine active parent from the URL on load or URL change
    const activeRoute = routesData.find(route => location.pathname.includes(route.name));
    if (activeRoute) {
      setActiveParent(activeRoute.parentRouteId);
    }
  }, [location]);

  // Extract unique parent routes
  const parentRoutes = Array.from(new Set(routesData.map(item => item.mainMenu))).map(mainMenu => {
    return {
      mainMenu,
      parentRouteId: routesData.find(item => item.mainMenu === mainMenu).parentRouteId,
    };
  });

  // Filter child routes based on activeParent
  const childRoutes = routesData.filter(route => route.parentRouteId === activeParent);

  return (
    <div>
      {/* Parent Navbar */}
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#f1f1f1' }}>
        {parentRoutes.map(route => (
          <NavLink 
            key={route.parentRouteId}
            to={`/${route.mainMenu.toLowerCase().replace(/\s/g, '')}`}
            onClick={() => setActiveParent(route.parentRouteId)}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#7163e7' : 'transparent',
              color: isActive ? '#fff' : '#000',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            })}
          >
            {route.mainMenu}
          </NavLink>
        ))}
      </nav>

      {/* Child Navbar */}
      {activeParent && (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#f9f9f9' }}>
          {childRoutes.map(route => (
            <NavLink 
              key={route.id} 
              to={`/${route.mainMenu.toLowerCase().replace(/\s/g, '')}${route.name}`}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#fff' : '#000',
                padding: '10px 20px',
                backgroundColor: isActive ? '#7163e7' : '#e0e0e0',
                borderRadius: '4px'
              })}
            >
              {route.subMenu}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Dynamic Route Rendering */}
      <Routes>
        {parentRoutes.map(parent => (
          <Route key={parent.parentRouteId} path={`/${parent.mainMenu.toLowerCase().replace(/\s/g, '')}`} element={<ParentLayout />}>
            {routesData.filter(route => route.parentRouteId === parent.parentRouteId).map(route => {
              const Component = componentMap[route.componentName];
              return (
                <Route key={route.id} path={route.name.replace('/', '')} element={<Component />} />
              );
            })}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

function ParentLayout() {
  return (
    <div>
      {/* Render any common layout or elements for the parent route here */}
      <h2>Parent Route Layout</h2>
      {/* Outlet to render child components */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <DynamicNavbar />
    </Router>
  );
}

export default App;
