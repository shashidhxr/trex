import Avatar from './Avatar';

export const Appbar = () => {
    return (
        <div className="flex justify-between px-10 py-2 border-b-2">
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-black">
                    trex.
                </a>
            </div>

            {/* Right Section: Search Bar and Avatar */}
            <div className="flex items-center">
                {/* Search Bar */}
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
