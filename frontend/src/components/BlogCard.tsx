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
        <Link to={`/blog/${id}`}>
            <div className="w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="pr-96 p-6 m-5 flex flex-col space-y-4">
                    <div className="text-sm text-gray-500">
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
        </Link>

    );
};