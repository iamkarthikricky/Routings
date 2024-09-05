// components/index.js
import React, { lazy } from 'react';

// Dynamic imports with React.lazy
const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const Post = lazy(() => import('./Post'));
const Announcement = lazy(() => import('./Announcement'));
const ManageAccess=  lazy(() => import('./Announcement'));
// Import other components as needed

const componentMapping = {
  Home,
  Dashboard,
  Post,
  Announcement,
  "Manage Access":ManageAccess
  // Add other mappings here
};

export default componentMapping;
