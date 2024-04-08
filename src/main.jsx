import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM properly
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthPopUpProvider } from './context/authPopUpContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthPopUpProvider>
    <App />
    </AuthPopUpProvider>
  </BrowserRouter>
);
