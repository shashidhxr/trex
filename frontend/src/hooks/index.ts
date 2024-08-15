import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`, { headers: {
            Authorization: `${token}`
        }})
            .then(res => {
                setBlogs(res.data.blogs)
                setLoading(false)
            })
            console.log("token: ", token)
    }, [])

    return {
        loading,
        blogs
    }
}