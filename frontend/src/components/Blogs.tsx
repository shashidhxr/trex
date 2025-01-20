import { BlogCard } from "./BlogCard"
import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { useState, useEffect } from "react";
import { Blogpost } from "../hooks";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "../config";
// import { sign } from "crypto";

export const Blogs = ({
    signupComplete
}: { signupComplete: boolean }) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogpost[]>([]);
    const [error, setError] = useState<string>();
    const [tokenCollected, setTokenCollected] = useState(false)

    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        console.log("use effect trggered inside use blogs")
        const fetchBlogs = async () => {
            console.log("fetch blogs triggered")
            console.log("auth in fetch blogs", isAuthenticated)
            console.log("loading---fetchblogs", loading)
            
            try {
                console.log("try block")
                const token = fetchToken()
                console.log("token after fetch", token)
                console.log("-----------------------------------")
                console.log("auth before bulk req", isAuthenticated)
                if(isAuthenticated && signupComplete && tokenCollected){
                    const response = await axios.get(`${BACKEND_URL}/api/v1/post/bulk`
                        , {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        setBlogs(response.data.blogs);
                        console.log("loading----post /bulk", loading)
                    } else {
                        console.log("not authenticated", isAuthenticated)
                    }
            } catch (e) {
                setError("Failed to fetch blogs");
                console.error("Error fetching blogs:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [isAuthenticated, user, signupComplete, tokenCollected]);

    const fetchToken = async () => {
        try {
            const token = await getIdTokenClaims();
            console.log("Token fetched successfully:", token);
            setTokenCollected(true)
            return token;
        } catch (error) {
            console.error("Error fetching token:", error);
            setError("Failed to authenticate. Please log in again.");
            return null;
        }
    };

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
                <div className="mx-auto lg:col-span-3 mt-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="max-w-4xl mx-auto mr-10">
                            <BlogCard
                                id={blog.id}
                                authorName={blog.author.name || "unknown"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={blog.publishedDate || "not available"}
                            ></BlogCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};