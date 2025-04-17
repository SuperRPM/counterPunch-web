import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export interface Article {
  id: number;
  title: string;
  url: string;
  thumbnail_url: string;
  created_at: string;
  isCounterPunch?: boolean;
}

export const apiService = {
  async getArticles(): Promise<Article[]> {
    const response = await axios.get(`${API_BASE_URL}/articles`);
    return response.data;
  }
}; 