import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecursiveComponent from './navBar';

const routesData = [
  { id: 35, name: "/mysalary", componentName: "My Finances", mainMenu: "MY PAY", subMenu: "My Salary", parentRouteId: 33 },
  { id: 36, name: "/payslips", componentName: "My Finances", mainMenu: "MY PAY", subMenu: "Pay Slips", parentRouteId: 33 },
  { id: 37, name: "/incometax", componentName: "My Finances", mainMenu: "MY PAY", subMenu: "Income Tax", parentRouteId: 33 },
  { id: 38, name: "/incometax/declaration", componentName: "My Finances", mainMenu: "MANAGE TAX", subMenu: "Declaration", parentRouteId: 34 },
  { id: 39, name: "/incometax/previousname", componentName: "My Finances", mainMenu: "MANAGE TAX", subMenu: "Previous Name", parentRouteId: 34 },
  { id: 40, name: "/incometax/form12bb", componentName: "My Finances", mainMenu: "MANAGE TAX", subMenu: "FORM 12BB", parentRouteId: 34 },
  { id: 41, name: "/taxfilling", componentName: "My Finances", mainMenu: "MANAGE TAX", subMenu: "Tax Filling", parentRouteId: 34 },
  { id: 42, name: "/taxsavinginvestment", componentName: "My Finances", mainMenu: "MANAGE TAX", subMenu: "Tax Saving Investment", parentRouteId: 34 },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<RecursiveComponent parentRouteId={33} routesData={routesData} />} />
      </Routes>
    </Router>
  );
};

export default App;
