import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const BlogEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePublish = async () => {
        try {
            // const token = localStorage.getItem("token")
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkZmEyNjA0LWQwMGYtNDU4Zi1hNjQ0LTM0YjUzYzIzOTk2YiJ9.PkUV2AKPZ7wD9Bj10lfugINVa7XxOgIILp0flNQDI9s";
            console.log(token)
            if (!token) {
                throw new Error("Token not found. Please log in.");
            }

            const blogData = {
                title: title,
                content: content,
            };

            const response = await axios.post(`${BACKEND_URL}/api/v1/post`, blogData, {
                headers: {
                    Authorization: token,  // Ensure the correct format is used
                },
            });

            console.log('Blog posted successfully:', response.data);
            // Reset the form fields
            setTitle('');
            setContent('');
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="blog-editor p-6 border rounded-md shadow-md">
            <input
                type="text"
                className="title-input w-full mb-4 p-2 border-b-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="content-input w-full h-64 p-2 border-b-2"
                placeholder="Compose your blog here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
                className="publish-button mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handlePublish}
            >
                Publish
            </button>
        </div>
    );
};
