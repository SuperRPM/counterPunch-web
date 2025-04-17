import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            CounterPunch
          </Link>
          
          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/articles"
                className="text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              >
                기사
              </Link>
              <Link
                to="/counter"
                className="text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              >
                카운터
              </Link>
              <Link
                to="/user"
                className="text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              >
                마이페이지
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 