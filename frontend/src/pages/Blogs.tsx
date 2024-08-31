import { Card } from "../components/Card"
import { Appbar } from "../components/Appbar"
// import { Navbar } from "../components/Navbar"
import { useBlogs } from "../hooks" 


export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if(loading){
        return <div>
            loading......
        </div>
    }
    
    console.log(blogs)
    return <div>
        <Appbar></Appbar>
        <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="mt-2">
                    {blogs.map(blog => <Card 
                        authorName={blog.author.name || "unknown"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={blog.publishedDate || "not available"}
                    ></Card>
                    )}
                </div>
            <div>
                this is blogs
            </div>
            <div className="none lg:block">
            </div>
        </div>
    </div>
}

// function Avatar({authorName} : {authorName : string}) => {
//         return (

//         )
// }