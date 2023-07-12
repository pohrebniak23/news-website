import classNames from 'classnames';
import { ArticleTag } from 'entities/Article';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { HStack } from 'shared/ui/Stack';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { TagItem } from 'shared/ui/TagItem';
import { Title } from 'shared/ui/Title';
import styles from './TagsFilter.module.scss';

interface TagsFilterProps {
  className?: string;
  activeTag: ArticleTag;
  setActiveTag: (tag: ArticleTag) => void;
}

export const TagsFilter = ({
  className,
  activeTag,
  setActiveTag,
}: TagsFilterProps) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

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
    const newSearchParams = new URLSearchParams(searchParams.toString());
    setActiveTag(value);
    newSearchParams.set('tag', value);
    setSearchParams(newSearchParams);
  };

  return (
    <VStack className={classNames(styles.tags, className)}>
      <Title variant="h2" size="s" className={styles.title}>
        {t('Search with tags')}:
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
