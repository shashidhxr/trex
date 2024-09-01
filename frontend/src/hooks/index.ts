import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

interface Blogpost {
    id: string
    title: string
    author: {
        name: string | null
    }
    publishedDate: string;
    content: string;
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState<Blogpost[]>([])

    // useEffect(() => {
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkMTg1YjNiLTRkZGItNGIyZi05NjhiLTc0NTgwZGJjMDllOSJ9.e7rldtKkLJ2TQOgZv5cbme_x19tQMLvF8HjvYLTIs5g"
    //     console.log("token: ", token)
    //         axios.get(`${BACKEND_URL}/api/v1/post/bulk`, { headers: {
    //             Authorization: token
    //     }})
    //     .then(res => {
    //         console.log("Response:", res);
    //         if (res.data && Array.isArray(res.data.blogs)) {
    //             setBlogs(res.data.blogs);
    //         } else {
    //             console.error("Unexpected response structure:", res.data);
    //             setBlogs([]);
    //         }
    //     })
    //     .catch(error => {
    //         console.error("Error fetching blogs:", error);
    //         setBlogs([]); // Ensure blogs is always an array
    //     })
    //     .finally(() => {
    //         setLoading(false); // Always executed, regardless of success or failure
    //     });
    // }, [])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {

                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkMTg1YjNiLTRkZGItNGIyZi05NjhiLTc0NTgwZGJjMDllOSJ9.e7rldtKkLJ2TQOgZv5cbme_x19tQMLvF8HjvYLTIs5g"; 
                // const token = localStorage.getItem('token'); 
                const response = await axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
                    headers: {
                        Authorization: token, 
                    },
                });
    
                console.log("Response:", response);
    
                if (response.data && Array.isArray(response.data)) {
                    setBlogs(response.data);
                } else {
                    console.error("Unexpected response structure:", response.data);
                    setBlogs([]); // Ensure blogs is always an array
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]); // Ensure blogs is always an array
            } finally {
                setLoading(false);
            }
        };
    
        fetchBlogs();
    }, []);

    return {
        loading,
        blogs
    }
}