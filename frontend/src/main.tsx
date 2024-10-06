import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider 
        domain="trex0.us.auth0.com"
        clientId="9btmC0z2rZ5YzYq023VoVaeC8xr8KNqy"
        authorizationParams={{
            redirect_uri: window.location.origin + '/home'
          }}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Auth0Provider>
)
