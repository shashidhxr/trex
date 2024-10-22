import { BlogCard } from "./BlogCard"
import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs, error} = useBlogs();

    if (loading) {
        return (
            <div>
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                {error}
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="mx-auto lg:col-span-3 mt-2">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="max-w-2xl mx-auto mr-10">
                            <BlogCard
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
};