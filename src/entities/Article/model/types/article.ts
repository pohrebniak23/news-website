import { User } from 'entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export enum ArticleTag {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'Science',
  BUSINESS = 'Business',
  TECHNOLOGY = 'Technology',
}

export enum ArticleView {
  TILE = 'TILE',
  LIST = 'LIST',
}

export type ArticleBlock =
  | ArticleBlockCode
  | ArticleBlockImage
  | ArticleBlockText;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  views: number;
  createdAt: string;
  image: string;
  type: ArticleTag[];
  blocks: ArticleBlock[];
}
