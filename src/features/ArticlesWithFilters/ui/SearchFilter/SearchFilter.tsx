import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Input } from 'shared/ui/Input/Input';
import { VStack } from 'shared/ui/Stack';
import styles from './SearchFilter.module.scss';

interface ArticleSearchProps {
  search: string;
  setSearch: (search: string) => void;
  className?: string;
}

export const SearchFilter = ({
  className,
  search,
  setSearch,
}: ArticleSearchProps) => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const articleSearchHandler = (value: string) => {
    setSearch(value);
    newSearchParams.set('search', value);
    setSearchParams(newSearchParams);
  };

  return (
    <VStack className={classNames(className)}>
      <Input
        className={styles.input}
        type="text"
        value={search}
        onChange={articleSearchHandler}
        placeholder={t('Search by title')!}
      />
    </VStack>
  );
};
