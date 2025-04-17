interface NewsItemProps {
  title: string;
  thumbnail: string;
  isCounterPunch?: boolean;
}

const NewsItem = ({ title, thumbnail, isCounterPunch = false }: NewsItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        {isCounterPunch && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
            CounterPunch
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default NewsItem; 