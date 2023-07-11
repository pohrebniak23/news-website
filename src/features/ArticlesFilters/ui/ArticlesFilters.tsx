import classNames from 'classnames';
import { ArticleTag, ArticleView } from 'entities/Article';
import { useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { useGetArticlesWithFiltersQuery } from '../api/articlesFilters';
import styles from './ArticlesFilters.module.scss';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { SortingFilter } from './SortingFilter/SortingFilter';
import { TagsFilter } from './TagsFilter/TagsFilter';
import { ViewFilter } from './ViewFilter/ViewFilter';

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters = ({ className }: ArticlesFiltersProps) => {
  const [view, setView] = useState<ArticleView>(ArticleView.TILE);
  const [activeTag, setActiveTag] = useState<ArticleTag>(ArticleTag.ALL);

  console.log(view);

  useGetArticlesWithFiltersQuery({
    tag: activeTag,
  });

  // const { t } = useTranslation();
  // const { data: articles, error } = useArticleFiltersApi({});

  // if (error) {
  //   return (
  //     <HStack className={classNames(styles.filters, className)}>
  //       <Text size="m">{t('Filters not found')}</Text>
  //     </HStack>
  //   );
  // }

  return (
    <VStack gap="16" className={classNames(styles.filters, className)}>
      <VStack justify="between" className={styles.nav}>
        <VStack
          justify="end"
          align="center"
          gap="16"
          className={styles.sortingNav}
        >
          <SortingFilter />

          <ViewFilter view={view} setView={setView} />
        </VStack>
      </VStack>

      <SearchFilter />

      <TagsFilter activeTag={activeTag} setActiveTag={setActiveTag} />
    </VStack>
  );
};
