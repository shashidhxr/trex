// import { useBlogs } from "../hooks"
import { BlogPage } from "../components/BlogPage"
import { Appbar } from "../components/Appbar"
import { BlogFooterBar } from "../components/BlogFooter"
import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    })

    if(loading){
        return <div>
            <Appbar></Appbar>
            <BlogSkeleton></BlogSkeleton>
        </div>
    }

    if(!blog){
        return <div>
            no blog found
        </div>
    }
    return <div>
        <Appbar></Appbar>
        <BlogPage blog={blog}></BlogPage>
        <BlogFooterBar></BlogFooterBar>
    </div>
}