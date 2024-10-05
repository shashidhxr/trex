import { BlogCard } from "./BlogCard"
import { useBlogs } from "../hooks"
import { BlogCardSkeleton } from "./BlogCardSkeleton";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return(
            <div>
                <BlogCardSkeleton></BlogCardSkeleton>
                <BlogCardSkeleton></BlogCardSkeleton>
                <BlogCardSkeleton></BlogCardSkeleton>
            </div>  
        )
    }
    
    console.log(blogs);
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mx-auto lg:col-span-3 mt-2">
                    {blogs.map((blog) => (
                        <div className=" max-w-2xl mx-auto mr-10">
                            <BlogCard
                                key={blog.id}
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
}
