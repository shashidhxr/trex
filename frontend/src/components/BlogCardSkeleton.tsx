export const BlogCardSkeleton = () => {
    return (
        <div className="w-full max-w-2xl mx-auto my-3 px-6 py-2 bg-white rounded-lg shadow-md animate-pulse">
            <div className="space-y-4 py-2">
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>

                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                
                <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                </div>
            </div>
        </div>
    );
};
