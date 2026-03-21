export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  url: string;
  coverImage?: string;
  tags?: string[];
}
