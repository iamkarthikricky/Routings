import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyTimeline from './Timeline/timeline';
import Practice from './Practice/App';
import App from './Practice/App';
import MainTimelineComponent from './Practice/App';
import TimelineNavigation from './Practice/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimelineNavigation/>
  </React.StrictMode>
);