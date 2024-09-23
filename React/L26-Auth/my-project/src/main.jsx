import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import Store from './redux/Store.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// Environment variables
const authDomain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const authClientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;


if (!authDomain || !authClientId) {
  console.error("Auth0 environment variables are missing.");
} else {
  // console.log("Auth0 Domain:", authDomain);
  // console.log("Auth0 Client ID:", authClientId);
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider 
  domain={authDomain} 
  clientId={authClientId} 
  authorizationParams={{ redirect_uri: window.location.origin }}
>
  <Provider store={Store}>
    <App />
  </Provider>
</Auth0Provider>
  </React.StrictMode>
);
