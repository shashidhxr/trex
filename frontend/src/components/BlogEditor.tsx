import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const BlogEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const { getAccessTokenSilently, isAuthenticated, loginWithRedirect, user } = useAuth0();

    const handlePublish = async () => {
        try {
            if (!isAuthenticated || !user) {
                loginWithRedirect();
                return;
            }

            if (!title.trim() || !content.trim()) {
                setError('Title and content are required');
                return;
            }

            const token = await getAccessTokenSilently();
            
            const requestData = {
                // Auth0 user info
                sub: user.sub,
                email: user.email,
                name: user.name,
                // Blog data
                title: title.trim(),
                content: content.trim(),
            };

            const response = await axios.post(`${BACKEND_URL}/api/v1/post`, requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.error) {
                setError(response.data.error);
                return;
            }

            // Reset form and navigate
            setTitle('');
            setContent('');
            setError('');
            navigate('/blogs');
        } catch (e: any) {
            console.error('Error publishing blog:', e);
            setError(e.response?.data?.error || 'Failed to publish blog. Please try again.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <div className="blog-editor p-6 border rounded-md shadow-md bg-white">
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}
                
                <input
                    type="text"
                    className="title-input w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your blog title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <textarea
                    className="content-input w-full h-64 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Write your blog content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                
                <div className="flex justify-end mt-4 ">
                    <button
                        className="publish-button px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        onClick={handlePublish}
                        disabled={!isAuthenticated}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};