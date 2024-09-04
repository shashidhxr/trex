interface CardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  onClick: () => void;
}

export const Card = ({
  authorName,
  title,
  content,
  publishedDate,
  onClick
}: CardProps) => {
  return (
    <div className="w-fit my-3 mx-5 px-10 rounded overflow-hidden shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300" onClick={onClick}>
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-semibold">{authorName}</span> &middot; {publishedDate}
      </div>
      <div className="text-xl font-bold text-gray-800 mb-4">
        {title}
      </div>
      <div className="text-gray-700">
        {content.slice(0, 100) + "..."}
      </div>
    </div>
  );
};
