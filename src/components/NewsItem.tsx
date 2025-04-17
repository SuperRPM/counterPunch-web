import React, { useState } from 'react';

interface NewsItemProps {
  title: string;
  thumbnail: string;
  url: string;
  isCounterPunch?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, thumbnail, url, isCounterPunch }) => {
  const [imageError, setImageError] = useState(false);
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="flex items-center gap-2 p-2 border-b hover:bg-gray-50 transition-colors cursor-pointer relative"
      onClick={handleClick}
    >
      {isCounterPunch && (
        <div className="absolute -top-12 -right-2 transform -rotate-12 z-10">
          <div 
            style={{
              backgroundColor: '#059669',
              color: 'white',
              border: '1px solid #047857',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            className="px-3 py-1 rounded-md animate-pulse"
          >
            <span className="font-bold">CounterPunch</span>
          </div>
        </div>
      )}
      <div className="w-[15vw] h-[15vw] flex-shrink-0">
        {thumbnail && !imageError ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover rounded"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsItem; 