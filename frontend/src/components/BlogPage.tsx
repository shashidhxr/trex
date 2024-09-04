export const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Blog Container */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                {/* Blog Title */}

                <div className="flex justify-between">
                <div className="text-4xl font-bold mb-6">
                    Blog Title
                </div>

                <div className="text-sm text-gray-500 mb-8">
                    <div>
                        Author: John Doe
                    </div>
                    <div>
                        Date: September 4, 2024
                    </div>
                </div>
                </div>

                {/* Blog Content */}
                <div className="text-lg text-gray-800 leading-relaxed">
                    <p>
                        This is the full content of the blog post. It covers all the details that were previously summarized on the card. The content is displayed in a large and easily readable font to ensure a good reading experience.
                    </p>
                    <p className="mt-4">
                        Additional paragraphs and sections of the blog can continue here. The content area is spacious and designed to be the primary focus of the page.
                    </p>
                    {/* Add more paragraphs or content as needed */}
                </div>
            </div>
        </div>
    );
};
