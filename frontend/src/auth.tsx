import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const AuthRedirectHandler: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && user) {
        navigate('/home'); // Redirect to /home if authenticated
      } else if (!isAuthenticated) {
        navigate('/signup'); // Redirect to login page if not authenticated
      }
    }
  }, [isAuthenticated, user, isLoading, navigate]);

  return <div>{isLoading ? 'Loading...' : null}</div>;
};

export default AuthRedirectHandler;
