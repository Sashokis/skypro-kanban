import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './contexts/user.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext.Provider>
      <App />
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
