import { Link } from "react-router-dom";

interface CardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: CardProps) => {
    return (
        <Link to={`/blog/${id}`} className="block no-underline">
            <div className="w-full h-44 p-2 my-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-full p-6 flex flex-col">
                    <div className="space-y-3">
                        <div className="text-sm text-gray-500 ">
                            <span className="font-semibold">{authorName}</span> &middot; {publishedDate}
                        </div>
                        <div className="text-xl font-bold text-gray-800">
                            {title}
                        </div>
                        <div className="text-gray-700 line-clamp-2">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

