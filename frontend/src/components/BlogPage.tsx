import { Blogpost } from "../hooks"

export const BlogPage = ({
    blog
}: {
    blog: Blogpost
}) => {
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
                    <p>
                        {blog.content}
                    </p>
                    <p className="mt-4">
                        {/* {bio} */}
                        This is the bio of the user
                    </p>
                </div>
            </div>
        </div>
    );
};
