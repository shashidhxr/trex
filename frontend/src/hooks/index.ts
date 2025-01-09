import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useAuth0 } from '@auth0/auth0-react';

export interface Blogpost {
    id: string;
    title: string;
    author: {
        name: string | null;
        sub?: string;
    };
    publishedDate: string;
    content: string;
}

export const useBlog = ({
    id
}: {
    id: string
}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blogpost>();
    const [error, setError] = useState<string>();
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await axios.get(`${BACKEND_URL}/api/v1/post/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBlog(response.data.blog);
            } catch (e) {
                setError("Failed to fetch blog");
                console.error("Error fetching blog:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, getAccessTokenSilently]);

    return {
        loading,
        blog,
        error,
        isAuthenticated
    };
};

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogpost[]>([]);
    const [error, setError] = useState<string>();
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = await getAccessTokenSilently();
                console.log(token)
                const response = await axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBlogs(response.data.blogs);
            } catch (e) {
                setError("Failed to fetch blogs");
                console.error("Error fetching blogs:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [getAccessTokenSilently]);

    return {
        loading,
        blogs,
        error,
        isAuthenticated,
        currentUser: user
    };
};