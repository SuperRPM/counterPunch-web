import { useEffect, useState } from 'react';
import NewsItem from '../components/NewsItem';
import SubscribeForm from '../components/SubscribeForm';
import { apiService, Article } from '../services/apiService';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await apiService.getArticles();
        const articlesWithCounterPunch = data.map((article, index) => ({
          ...article,
          isCounterPunch: index === 4
        }));
        setArticles(articlesWithCounterPunch);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
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
          {articles.map((article) => (
            <NewsItem
              key={article.id}
              title={article.title}
              thumbnail={article.thumbnail_url}
              url={article.url}
              isCounterPunch={article.isCounterPunch}
            />
          ))}
        </div>
      )}

      <SubscribeForm />
    </div>
  );
};

export default Home; 