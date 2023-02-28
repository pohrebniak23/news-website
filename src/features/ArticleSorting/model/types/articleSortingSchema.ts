import { SortingOrder } from 'shared/types/Sorting';

export enum ArticleSortingBy {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

export interface ArticleSortingSchema {
  sort: ArticleSortingBy;
  title: string;
  order: SortingOrder;
}
