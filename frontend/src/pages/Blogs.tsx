import { Card } from "../components/Card"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();

    if (loading) {
        return <div>loading......</div>;
    }

    console.log(blogs);
    return (
        <div>
            <Appbar />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="mt-2">
                    {blogs.map((blog) => (
                        <Card
                            key={blog.id}
                            authorName={blog.author.name || "unknown"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={blog.publishedDate || "not available"}
                        />
                    ))}
                </div>
                <div className="hidden lg:block">
                    <button
                        className="p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                        onClick={() => navigate("/create")}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}


// function Avatar({authorName} : {authorName : string}) => {
//         return (

//         )
// }