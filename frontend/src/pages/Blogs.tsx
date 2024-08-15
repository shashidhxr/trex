// import { Card } from "../components/Card"
import { Quote } from "../components/Quote"
import { Appbar } from "../components/Appbar"
// import { useBlogs } from "../hooks"

export const Blogs = () => {
    // const {loading, blogs} = useBlogs()

    // if(loading){
    //     return <div>
    //         loading......
    //     </div>
    // }
    
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-2">
                <Appbar></Appbar>
                {/* {blogs.map(blog => <Card 
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={blog.publishedDate}
                ></Card>
                )} */}
            </div>
            <div className="none lg:block">
                <Quote></Quote>
            </div>
        </div>
    </div>
}

// function Avatar({authorName} : {authorName : string}) => {
//         return (

//         )
// }