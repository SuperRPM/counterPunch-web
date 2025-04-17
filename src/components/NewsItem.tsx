import React from 'react';

interface NewsItemProps {
  title: string;
  thumbnail: string;
  url: string;
  isCounterPunch?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, thumbnail, url, isCounterPunch }) => {
  return (
    <div className="flex items-center gap-2 p-2 border-b hover:bg-gray-50 transition-colors">
      <div className="w-[15vw] h-[15vw] flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {title}
        </h3>
        {isCounterPunch && (
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-white bg-blue-500 rounded">
            CounterPunch
          </span>
        )}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 text-sm whitespace-nowrap"
      >
        기사 보기
      </a>
    </div>
  );
};

export default NewsItem; 