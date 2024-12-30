import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Foot } from '../components/Foot';
import { Contacts } from "../components/Contacts";
import { Boxes } from '../components/ui/backround-boxes';
import { cn } from "../../lib/utils";
import axios from 'axios';

export const Landing = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [user, setUser] = useState(null);

  const { loginWithRedirect, logout, user: auth0User, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const closeModal = () => {
    setContactOpen(false);
  };

  const handleLogin = async () => {
    try {
      // Trigger login redirect
      await loginWithRedirect();
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const handleSignUp = async () => {
    try {
      // Trigger signup redirect
      await loginWithRedirect({ screen_hint: "signup" });
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  // Fetch the user profile and send it to the backend
  useEffect(() => {
    if (isAuthenticated) {
      // Get the access token to call the backend API
      const fetchUserData = async () => {
        const accessToken = await getAccessTokenSilently();

        if (auth0User) {
          const userData = {
            email: auth0User.email,
            name: auth0User.name,
          };

          try {
            // Send the user details to your backend for registration
            await axios.post(`${BACKEND_URL}/api/v1/signup`, userData, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });

            console.log("User registered successfully");
          } catch (error) {
            console.error("Error registering user", error);
          }
        }
      };

      fetchUserData();
    }
  }, [isAuthenticated, getAccessTokenSilently, auth0User]);

  return (
    <div className="flex flex-col min-h-screen bg-[#222222]"> 
      <div className="h-screen relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        <h1 className={cn("mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#EEEEEE] relative z-20 md:text-5xl lg:text-6xl")}>
          We invest in the world’s potential
        </h1>
        <p className={cn("flex flex-col items-center justify-center mb-8 text-lg font-normal text-[#686D76] lg:text-xl sm:px-16 lg:px-48 z-20 text-center")}>
          At Trex, we believe in the power of ideas to shape the future. We explore where creativity, technology, and insight converge to unlock new opportunities and drive meaningful progress.
        </p>
        <div className={cn("flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 z-20")}>
          <a onClick={handleSignUp}
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#EEEEEE] rounded-lg bg-[#DC5F00] hover:bg-red-500 focus:ring-4 focus:ring-[#DC5F00]/50 dark:focus:ring-[#BF4F00]">
            Sign Up
            <svg
              className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a onClick={handleLogin}
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-[#EEEEEE] rounded-lg border border-[#EEEEEE] hover:bg-cyan-900 hover:focus:ring-4 focus:ring-gray-400">
            Sign In
          </a>
        </div>
      </div>

      <Foot />

      {isContactOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-transparent p-6 rounded-lg shadow-lg relative max-w-xl mx-auto">
            <Contacts />
            <button
              type="button"
              className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={closeModal}>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
