import { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItem';
import SubscribeForm from '../components/SubscribeForm';
import { newsService } from '../services/newsService';

interface NewsItem {
  title: string;
  thumbnail: string;
  url: string;
  isCounterPunch?: boolean;
}

const Home = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const urls = [
        {
          url: 'https://www.ekn.kr/web/view.php?key=20250417023178225',
          isCounterPunch: false
        },
        {
          url: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1008065717',
          isCounterPunch: false
        },
        {
          url: 'https://news.nate.com/view/20250417n30681',
          isCounterPunch: false
        },
        {
          url: 'https://www.businesspost.co.kr/BP?command=article_view&num=391780',
          isCounterPunch: false
        },
        {
          url: 'https://mbnmoney.mbn.co.kr/news/view?news_no=MM1005466017',
          isCounterPunch: true
        }
      ];

      await newsService.fetchNewsData(urls.map(item => item.url));
      const items = newsService.getNewsItems();
      // CounterPunch 여부 설정
      const updatedItems = items.map((item, index) => ({
        ...item,
        isCounterPunch: urls[index].isCounterPunch
      }));
      setNewsItems(updatedItems);
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="space-y-6 px-4">
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-gray-900">
          균형잡힌 뉴스 플랫폼
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          CounterPunch는 뉴스의 편향을 시각화하고 중화하는 플랫폼입니다.
          AI 기반 요약과 정치성향 분석을 통해 균형잡힌 시각을 제공합니다.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-8">로딩 중...</div>
      ) : (
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              url={item.url}
              isCounterPunch={item.isCounterPunch}
            />
          ))}
        </div>
      )}

      <SubscribeForm />
    </div>
  );
};

export default Home; 