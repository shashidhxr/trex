export const BlogSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-between mb-6">
                    <div className="h-8 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
                </div>

                <div className="text-sm text-gray-500 mb-8">
                    <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/6 animate-pulse"></div>
                </div>

                <div className="text-lg text-gray-800 leading-relaxed">
                    <div className="h-4 bg-gray-200 rounded-full mb-4 animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full mb-4 animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full mb-4 animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full mb-4 animate-pulse w-full"></div>
                </div>
            </div>
        </div>
    );
};
