import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewsIcon from 'shared/assets/views-icon.svg';
import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import {
  Article,
  ArticleBlockText,
  ArticleBlockType,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('articles');

    const typesBlock = (
      <Text size="s" className={styles.type}>
        {article.type.join(', ')}
      </Text>
    );

    const viewsBlock = (
      <div className={styles.viewsBlock}>
        <Text className={styles.views}>{article.views}</Text>
        <Icon Svg={ViewsIcon} />
      </div>
    );

    const textInfoBlock = article.blocks.find(
      (item) => item.type === ArticleBlockType.TEXT,
    ) as ArticleBlockText;

    if (view === ArticleView.TILE) {
      return (
        <AppLink
          className={classNames(
            className,
            styles.articleListItem,
            styles[view],
          )}
          to={`${RoutePath.articles_details}${article.id}`}
        >
          <div className={styles.imageBlock}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.image}
            />
          </div>

          <HStack gap="16" className={styles.category}>
            {article?.type &&
              article?.type.map((item) => (
                <Text size="xs" key={item} className={styles.categoryItem}>
                  {item}
                </Text>
              ))}
          </HStack>

          <Text className={styles.title}>{article.title}</Text>

          <HStack className={styles.bottomInfo} gap="16" align="center">
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
          </HStack>
        </AppLink>
      );
    }

    return (
      <div
        className={classNames(className, styles.articleListItem, styles[view])}
      >
        <div className={styles.header}>
          <div className={styles.user}>
            <img src={article.user.avatar} alt="" className={styles.avatar} />

            <Text className={styles.username}>{article.user.username}</Text>
          </div>

          <Text className={article.createdAt}>{article.createdAt}</Text>
        </div>

        <div className={styles.info}>
          <div className={styles.content}>
            <Text className={styles.title} size="m">
              {article.title}
            </Text>

            {typesBlock}

            {textInfoBlock && (
              <ArticleTextBlockComponent
                withTitle={false}
                textSize="xs"
                className={styles.text}
                block={textInfoBlock}
              />
            )}
          </div>

          <img
            src={article.image}
            alt={article.title}
            className={styles.image}
          />
        </div>

        <div className={styles.bottom}>
          <AppLink
            to={`${RoutePath.articles_details}${article.id}`}
            className={styles.link}
          >
            {t('Читать далее...')}
          </AppLink>

          {viewsBlock}
        </div>
      </div>
    );
  },
);
