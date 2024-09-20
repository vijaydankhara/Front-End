import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider domain='dev-y5kewbyn5iowjcju.us.auth0.com' clientId='xDW6DqknRw5DRRrxpY0NYrXdRjEesxNr' authorizationParams={{redirect_uri:window.location.origin}}>

    <Provider store={Store}>
      <App />
    </Provider>
  </Auth0Provider>
  </React.StrictMode>,
)
