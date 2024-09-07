import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

export const Appbar = () => {
    const navigate = useNavigate()
    
    return (
        <div className="flex justify-between px-10 py-2 border-b-2">
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-black">
                    trex.
                </a>
            </div>

            <div className="flex items-center">
            <button
                onClick={() => {
                    navigate('/create')
                }}
                className="bg-blue-400 text-white px-4 py-1 mx-4 border border-black rounded-md shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300"
            >
                Publish
            </button>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border bg-gray-200 border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black-500"
                    />
                </div>

                {/* Avatar */}
                <div className="ml-4">
                    <Avatar />
                </div>
            </div>
        </div>
    );
};
