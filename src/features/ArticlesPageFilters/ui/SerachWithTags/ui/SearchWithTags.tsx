import classNames from 'classnames';
import { ArticleTag } from 'entities/Article';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { TagItem } from 'shared/ui/TagItem';
import { Title } from 'shared/ui/Title';
import { useGetArticlesByTag } from '../../../api/searchWithTagsApi';
import styles from './SearchWithTags.module.scss';

interface SearchWithTagsProps {
  className?: string;
}

export const SearchWithTags = ({ className }: SearchWithTagsProps) => {
  const { t } = useTranslation();
  // const [searchParams, setSearchParams] = useSearchParams();
  const [activeTag, setActiveTag] = useState<ArticleTag>(ArticleTag.ALL);

  const { refetch } = useGetArticlesByTag(activeTag);

  const TabsList: ArticleTag[] = useMemo(
    () => [
      ArticleTag.ALL,
      ArticleTag.IT,
      ArticleTag.BUSINESS,
      ArticleTag.SCIENCE,
      ArticleTag.TECHNOLOGY,
    ],
    [],
  );

  const onTabsChangeHandler = (value: ArticleTag) => {
    setActiveTag(value);
    refetch();
  };

  return (
    <VStack className={classNames(styles.tags, className)}>
      <Title variant="h2" size="s" className={styles.title}>
        {t('Search with tags')}
      </Title>

      <HStack gap="8" wrap>
        {TabsList.map((item) => (
          <TagItem<ArticleTag>
            variant={item === activeTag ? 'dark' : 'light'}
            text={item}
            key={item}
            onClick={() => onTabsChangeHandler(item)}
          />
        ))}
      </HStack>
    </VStack>
  );
};
