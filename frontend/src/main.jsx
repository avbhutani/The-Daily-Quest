import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-1ufe2k25le8wccpx.us.auth0.com"
  clientId="TvuFIT2e8eMEGVfQfDA5gJSVSVyRIBUm"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <App />
</Auth0Provider>
)
