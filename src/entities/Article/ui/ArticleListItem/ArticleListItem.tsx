import classNames from 'classnames';
import { memo } from 'react';
import ViewsIcon from 'shared/assets/views-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { TagItem } from 'shared/ui/TagItem';
import { Text } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const viewsBlock = (
      <HStack className={styles.viewsBlock}>
        <Text className={styles.views}>{article.views}</Text>
        <Icon Svg={ViewsIcon} className={styles.viewsIcon} />
      </HStack>
    );

    if (view === ArticleView.TILE) {
      return (
        <VStack
          className={classNames(
            className,
            styles.articleListItem,
            styles[view],
          )}
        >
          <AppLink
            to={`${RoutePath.articles_details}${article.id}`}
            className={styles.imageBlock}
          >
            <img
              src={article.image}
              alt={article.title}
              className={styles.image}
            />
          </AppLink>

          <VStack className={styles.content}>
            <HStack gap="16" className={styles.category}>
              {article?.type &&
                article?.type.map((item) => <TagItem key={item} text={item} />)}
            </HStack>

            <AppLink to={`${RoutePath.articles_details}${article.id}`}>
              <Title size="l" className={styles.title}>
                {article?.title}
              </Title>
            </AppLink>

            <HStack className={styles.bottomInfo} gap="16" align="center">
              <HStack
                w100={false}
                className={styles.user}
                gap="16"
                align="center"
              >
                <img
                  src={article.user.avatar}
                  className={styles.avatar}
                  alt=""
                />
                <Text className={styles.username}>{article.user.username}</Text>
              </HStack>
              <Text className={styles.date}>{article?.createdAt}</Text>
            </HStack>
          </VStack>
        </VStack>
      );
    }

    return (
      <div
        className={classNames(styles.articleListItem, className, styles[view])}
      >
        <div className={styles.background}>
          <img src={article?.image} alt="" />
        </div>

        <VStack className={styles.content}>
          <HStack gap="16" className={styles.category}>
            {article?.type &&
              article?.type.map((item) => (
                <TagItem
                  className={styles.categoryItem}
                  key={item}
                  text={item}
                  variant="dark"
                />
              ))}
          </HStack>

          <AppLink to={`${RoutePath.articles_details}${article.id}`}>
            <Title size="l" className={styles.title}>
              {article?.title}
            </Title>
          </AppLink>

          <HStack className={styles.bottomInfo} gap="32" align="center">
            <HStack
              w100={false}
              className={styles.user}
              gap="16"
              align="center"
            >
              <img src={article.user.avatar} className={styles.avatar} alt="" />
              <Text className={styles.username}>{article.user.username}</Text>
            </HStack>
            <Text className={styles.date}>{article?.createdAt}</Text>
            {viewsBlock}
          </HStack>
        </VStack>
      </div>
    );
  },
);
