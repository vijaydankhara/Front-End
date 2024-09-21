import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.AUTH0_DOMAIN;
const clientId = import.meta.env.AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.AUTH0_REDIRECT_URI;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={clientId} 
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      <Provider store={Store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
