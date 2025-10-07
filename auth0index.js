import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './app';

// Replace with your Auth0 credentials
const domain = "YOUR_AUTH0_DOMAIN"; // e.g., 'dev-xxxx.auth0.com'
const clientId = "YOUR_AUTH0_CLIENT_ID"; // Your Auth0 client ID

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your app with Auth0Provider */}
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);