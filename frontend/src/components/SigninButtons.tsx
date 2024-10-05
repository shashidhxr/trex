import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SigninButtons: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='grid grid-cols-2 gap-1 mt-2'>
      <button
        onClick={() => loginWithRedirect({ connection: 'google' })}
        className="bg-red-500 text-white py-2 mr-1 px-5 rounded-md"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => loginWithRedirect({ connection: 'github' })}
        className="bg-gray-700 text-white py-2 ml-1 px-5 rounded-md"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SigninButtons;
