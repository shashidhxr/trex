import { BlogCard } from "./BlogCard"
import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { useState, useEffect } from "react";
import { Blogpost } from "../hooks";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogpost[]>([]);
    const [error, setError] = useState<string>();
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log("use effect trggered inside use blogs")
        const fetchBlogs = async () => {
            console.log("fetch blogs triggered")
            console.log(isAuthenticated)
            console.log("auth in fetch blogs")

            try {
                const token = await getAccessTokenSilently();
                console.log(token)
                console.log("-----------------------------------")
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
    }, [isAuthenticated, getAccessTokenSilently]);

    if (loading) {
        return (
            <div>
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                {error}
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mx-auto lg:col-span-3 mt-2">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="max-w-2xl mx-auto mr-10">
                            <BlogCard
                                id={blog.id}
                                authorName={blog.author.name || "unknown"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={blog.publishedDate || "not available"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};