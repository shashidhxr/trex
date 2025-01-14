// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider 
        domain="youngmonk.us.auth0.com"
        clientId="VjolvDkxvDqKSAo3H6JwNWuvzdAE6x8F"
        authorizationParams={{
            redirect_uri: window.location.origin + '/home'
          }}
    >
            <App />
    </Auth0Provider>
)
