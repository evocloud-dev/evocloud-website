export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null; // can make stricter if you want (thumbnail, medium, large, etc.)
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  id: number;
  documentId: string;
  bio: string;
  firstName: string;
  lastName: string;
  socialLinks: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  readingTime: number;
  cover: StrapiMedia;
  featured: boolean;
  author: Author;
  content: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination: Pagination;
}

export interface StrapiArticlesResponse<T> {
  data: T[];
  meta: StrapiMeta;
}

export type ArticlesResponse = StrapiArticlesResponse<Article>;

export interface StrapiArticleResponse<T> {
  data: T;
  meta: StrapiMeta;
}

export type ArticleResponse = StrapiArticleResponse<Article>;
