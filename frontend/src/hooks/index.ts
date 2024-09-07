import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export  interface Blogpost {
    id: string
    title: string
    author: {
        name: string | null
    }
    publishedDate: string;
    content: string;
}

export const useBlog = ({
    id
}: {
    id: string
}) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] =  useState<Blogpost>()

    useEffect(() => {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNkNDkxNDJkLThiNTMtNGU3OS1iY2U4LWVjODM4ZDIyNGExMiJ9.w2Nc9M1I_Hg52W2BPfj0BDO-3n9CjWzJcZAGIDVIi2A"; 
                // const token = localStorage.getItem("token")
                // console.log(token) 
                axios.get(`${BACKEND_URL}/api/v1/post/${id}`, {
                    headers: {
                        Authorization: token, 
                    },
                })
                .then(response => {
                    setBlog(response.data.blog)
                    setLoading(false)   
                })
    }, [id]);

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blogpost[]>([])

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNkNDkxNDJkLThiNTMtNGU3OS1iY2U4LWVjODM4ZDIyNGExMiJ9.w2Nc9M1I_Hg52W2BPfj0BDO-3n9CjWzJcZAGIDVIi2A"
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
            headers: {
                Authorization: token
            },
        })
        .then(response => {
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    }, [])

    return {
        loading,
        blogs
    }
}