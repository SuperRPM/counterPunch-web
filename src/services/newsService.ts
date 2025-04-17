interface NewsItem {
  title: string;
  thumbnail: string;
  url: string;
  isCounterPunch?: boolean;
}

class NewsService {
  private newsItems: NewsItem[] = [];

  setNewsItems(items: NewsItem[]) {
    this.newsItems = items;
  }

  getNewsItems(): NewsItem[] {
    return this.newsItems;
  }

  async fetchNewsData(urls: string[]) {
    try {
      const items = await Promise.all(
        urls.map(async (url) => {
          try {
            const response = await fetch(url);
            const html = await response.text();
            
            // HTML에서 title과 thumbnail 추출
            const titleMatch = html.match(/<title>(.*?)<\/title>/i);
            const ogImageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i);
            
            return {
              title: titleMatch ? titleMatch[1].trim() : '제목 없음',
              thumbnail: ogImageMatch ? ogImageMatch[1] : 'https://via.placeholder.com/400x300',
              url
            };
          } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return null;
          }
        })
      );

      this.newsItems = items.filter((item): item is NewsItem => item !== null);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
}

export const newsService = new NewsService(); 