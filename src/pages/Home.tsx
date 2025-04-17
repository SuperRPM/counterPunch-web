import NewsItem from '../components/NewsItem';
import SubscribeForm from '../components/SubscribeForm';

// 임시 데이터 - 실제로는 API에서 가져올 예정
const newsItems = [
  {
    title: '정부, 내년도 예산안 656조원 편성...역대 최대',
    thumbnail: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'CounterPunch: 예산안 분석 - 누가 더 많은 예산을 받았나?',
    thumbnail: 'https://via.placeholder.com/400x300',
    isCounterPunch: true,
  },
  {
    title: '주식시장, 3일 연속 상승...코스피 2,700선 돌파',
    thumbnail: 'https://via.placeholder.com/400x300',
  },
  {
    title: '기업들의 ESG 경영, 실효성 논란',
    thumbnail: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'CounterPunch: ESG 경영의 진실과 오해',
    thumbnail: 'https://via.placeholder.com/400x300',
    isCounterPunch: true,
  },
  {
    title: '디지털 전환 가속화...기업들의 AI 도입 현황',
    thumbnail: 'https://via.placeholder.com/400x300',
  },
];

const Home = () => {
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

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            isCounterPunch={item.isCounterPunch}
          />
        ))}
      </div>

      <SubscribeForm />
    </div>
  );
};

export default Home; 