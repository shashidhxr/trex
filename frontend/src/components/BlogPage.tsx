// import { Blogpost } from "../hooks"
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const BlogPage = () => {
    const { id } = useParams();
    const { blog, loading, error, isAuthenticated } = useBlog({ id: id || "" });

    if (!isAuthenticated) {
        return (
            <div className="text-center py-10">
                <p>Please log in to view this blog</p>
            </div>
        );
    }

    if (loading) {
        return <div className="min-h-screen bg-gray-100 p-6">Loading...</div>;
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-gray-100 p-6 text-center text-red-500">
                {error || "Blog not found"}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="text-4xl font-bold mb-6">
                        {blog.title}
                    </div>
                    <div className="text-sm text-gray-500 mb-8">
                        <div>
                            {blog.author.name}
                        </div>
                        <div>
                            {blog.publishedDate}
                        </div>
                    </div>
                </div>

                <div className="text-lg text-gray-800 leading-relaxed">
                    <p>{blog.content}</p>
                    <p className="mt-4">
                        This is the bio of the user
                    </p>
                </div>
            </div>
        </div>
    );
};