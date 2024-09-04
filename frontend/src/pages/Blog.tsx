// import { useBlogs } from "../hooks"
import { BlogPage } from "../components/BlogPage"
import { Appbar } from "../components/Appbar"
import { BlogFooterBar } from "../components/BlogFooter"

export const Blog = () => {
    return <div>
        <Appbar></Appbar>
        <BlogPage></BlogPage>
        <BlogFooterBar></BlogFooterBar>
    </div>
}