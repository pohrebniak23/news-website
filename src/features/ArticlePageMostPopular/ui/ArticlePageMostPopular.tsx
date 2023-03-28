import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import ViewsIcon from 'shared/assets/views-icon.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
import { useMostPopularArticle } from '../api/articlePageMostPopular';
import styles from './ArticlePageMostPopular.module.scss';

interface ArticlePageMostPopularProps {
  className?: string;
}

export const ArticlePageMostPopular = ({
  className,
}: ArticlePageMostPopularProps) => {
  const { t } = useTranslation();
  const { data: article } = useMostPopularArticle();

  return article ? (
    <VStack gap="16" className={classNames(styles.popular, className)}>
      <Title className={styles.title}>{t('Most popular news')}</Title>

      <div
        className={styles.article}
        style={{ backgroundImage: article[0]?.image }}
      >
        <div className={styles.background}>
          <img src={article[0]?.image} alt="" />
        </div>

        <VStack className={styles.content}>
          <HStack gap="16" className={styles.category}>
            {article[0]?.type &&
              article[0]?.type.map((item) => (
                <Text size="xs" key={item} className={styles.categoryItem}>
                  {item}
                </Text>
              ))}
          </HStack>

          <AppLink to={`/articles/${article[0].id}`}>
            <Title size="l" className={styles.contentTitle}>
              {article[0]?.title}
            </Title>
          </AppLink>

          <HStack className={styles.bottomInfo} gap="32" align="center">
            <HStack
              w100={false}
              className={styles.user}
              gap="16"
              align="center"
            >
              <img
                src={article[0].user.avatar}
                className={styles.avatar}
                alt=""
              />
              <Text className={styles.username}>
                {article[0].user.username}
              </Text>
            </HStack>
            <Text className={styles.date}>{article[0]?.createdAt}</Text>

            <HStack align="center" className={styles.viewsBlock}>
              <Text className={styles.views}>{article[0].views}</Text>
              <Icon Svg={ViewsIcon} className={styles.viewsIcon} />
            </HStack>
          </HStack>
        </VStack>
      </div>
    </VStack>
  ) : null;
};
