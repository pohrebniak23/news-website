import classNames from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ArrowIcon from 'shared/assets/arrow-icon.svg';
import CalendarIcon from 'shared/assets/calendar-icon.svg';
import ViewsIcon from 'shared/assets/views-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/articleDetailsSelector';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { ArticleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  useDynamicReducerLoader({ articleDetails: ArticleDetailsReducer });

  useEffect(() => {
    if (id && PROJECT !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  const renderBlocks = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    return (
      <div className={classNames(styles.articleDetails, className)}>
        <Skeleton
          className={styles.skeletonCircle}
          width="140px"
          height="140px"
          borderRadius="50%"
        />
        <Skeleton
          className={styles.skeletonItem}
          width="30%"
          height="20px"
          borderRadius="4px"
        />
        <Skeleton
          className={styles.skeletonItem}
          width="20%"
          height="20px"
          borderRadius="4px"
        />
        <Skeleton
          className={styles.skeletonItem}
          width="100%"
          height="120px"
          borderRadius="4px"
        />
        <Skeleton
          className={styles.skeletonItem}
          width="100%"
          height="120px"
          borderRadius="4px"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.articleDetails, className)}>
        <Text theme="error">{t('Article is not found')}</Text>
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleDetails, className)}>
      <AppLink className={styles.backLink} to={RoutePath.articles}>
        <ArrowIcon className={styles.backArrow} />
        <Text size="extra-small">{t('Back')}</Text>
      </AppLink>

      <Avatar
        className={styles.avatar}
        src={data?.image}
        widthSize="160px"
        heightSize="160px"
        radius="50%"
      />

      <Title className={styles.title} size="medium">
        {data?.title}
      </Title>
      <Text className={styles.subtitle}>{data?.subtitle}</Text>

      <div className={styles.info}>
        <Icon Svg={ViewsIcon} />
        <Text>{data?.views}</Text>
      </div>
      <div className={styles.info}>
        <Icon Svg={CalendarIcon} />
        <Text>{data?.createdAt}</Text>
      </div>

      {data?.blocks?.map(renderBlocks)}
    </div>
  );
});
