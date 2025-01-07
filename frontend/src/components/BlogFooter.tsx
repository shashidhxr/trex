import { useNavigate } from "react-router-dom";

export const BlogFooterBar = () => {
    const navigate = useNavigate()

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Navigation Button */}
                <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={() => navigate('/home')}>
                    ← Back to Blog List
                </button>

                {/* Feature Buttons */}
                <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        Edit Post
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        Delete Post
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        Share Post
                    </button>
                </div>
            </div>
        </div>
    );
};
