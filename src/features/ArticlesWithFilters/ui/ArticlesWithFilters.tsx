import classNames from 'classnames';
import { ArticleList, ArticleTag, ArticleView } from 'entities/Article';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounceValue } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortingOrder } from 'shared/types/Sorting';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack, VStack } from 'shared/ui/Stack';
import {
  ArticleSortingBy,
  useGetArticlesWithFiltersQuery,
} from '../api/articlesFilters';
import styles from './ArticlesFilters.module.scss';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { SortingFilter } from './SortingFilter/SortingFilter';
import { TagsFilter } from './TagsFilter/TagsFilter';
import { ViewFilter } from './ViewFilter/ViewFilter';

interface ArticlesWithFiltersProps {
  page?: number;
  className?: string;
}

export const ArticlesWithFilters = ({
  page,
  className,
}: ArticlesWithFiltersProps) => {
  const [searchParams] = useSearchParams();

  const [view, setView] = useState<ArticleView>(
    (searchParams.get('view') as ArticleView) || ArticleView.TILE,
  );
  const [search, setSearch] = useState<string>(
    searchParams.get('search') || '',
  );
  const [activeTag, setActiveTag] = useState<ArticleTag>(
    (searchParams.get('tag') as ArticleTag) || ArticleTag.ALL,
  );
  const [sort, setSort] = useState<ArticleSortingBy>(
    (searchParams.get('sort') as ArticleSortingBy) || ArticleSortingBy.VIEWS,
  );
  const [order, setOrder] = useState<SortingOrder>(
    (searchParams.get('order') as SortingOrder) || 'desc',
  );

  const debouncedSearch = useDebounceValue(search, 500);

  const {
    data: articles,
    isLoading,
    isFetching,
  } = useGetArticlesWithFiltersQuery({
    tag: activeTag,
    search: debouncedSearch,
    page,
    sort,
    order,
  });

  return (
    <HStack gap="32" className={className}>
      <VStack className={classNames(styles.content)}>
        {isLoading || isFetching ? (
          <Loader className={styles.loader} />
        ) : (
          <ArticleList
            className={styles.list}
            isLoading={isLoading}
            articles={articles || []}
            view={view}
          />
        )}
      </VStack>

      <VStack gap="16" className={classNames(styles.filters)}>
        <VStack justify="between" className={styles.nav}>
          <VStack
            justify="end"
            align="center"
            gap="16"
            className={styles.sortingNav}
          >
            <SortingFilter
              sort={sort}
              setSort={setSort}
              order={order}
              setOrder={setOrder}
            />

            <ViewFilter view={view} setView={setView} />
          </VStack>
        </VStack>

        <SearchFilter search={search} setSearch={setSearch} />

        <TagsFilter activeTag={activeTag} setActiveTag={setActiveTag} />
      </VStack>
    </HStack>
  );
};
