import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return(
            <div>
                <Appbar></Appbar>
                <BlogCardSkeleton></BlogCardSkeleton>
                <BlogCardSkeleton></BlogCardSkeleton>
                <BlogCardSkeleton></BlogCardSkeleton>
            </div>  
        )
    }
    
    console.log(blogs);
    return (
        <div>
            <Appbar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mx-auto lg:col-span-3 mt-2">
                    {blogs.map((blog) => (
                        <div className="w-full max-w-3xl mx-auto">
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
                <div className="lg:col-span-0">
                    
                </div>
            </div>
        </div>
    );
}
