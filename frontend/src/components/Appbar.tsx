import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
// import { LogoutButton } from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export const Appbar = () => {
    const navigate = useNavigate()
    
    const { logout } = useAuth0()
    return (
        <div className="flex justify-between px-32 py-2.5 border-b-2">
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-black">
                    trex.
                </a>
            </div>


            <div className="flex">
                <button
                    onClick={() => {
                        logout({
                            logoutParams: {
                                returnTo: window.location.origin
                            }
                        })
                    }}
                    className="bg-blue-400 text-white px-4 py-1 mx-2 border border-black rounded-md shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300"
                >
                    Logout
                </button>
                <button
                    onClick={() => {
                        navigate('/create')
                    }}
                    className="bg-blue-400 text-white px-4 py-1 mx-2 border border-black rounded-md shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300"
                >
                    Publish
                </button>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border bg-gray-200 border-gray-800 rounded-md px-3 mx-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-black-500"
                    />
                </div>

                <a className="ml-2" 
                    onClick={ () => {
                        navigate('/profile')
                    }}
                >
                    <Avatar />
                </a>
            </div>
        </div>
    );
};
