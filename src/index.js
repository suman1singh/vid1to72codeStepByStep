import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContext from './AppContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
);

reportWebVitals();
