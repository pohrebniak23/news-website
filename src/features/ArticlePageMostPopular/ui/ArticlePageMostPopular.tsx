import classNames from 'classnames';
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
  const { data: article } = useMostPopularArticle();

  return article ? (
    <div
      className={classNames(styles.article, className)}
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

        <Title size="l" className={styles.title}>
          {article[0]?.title}
        </Title>

        <HStack className={styles.bottomInfo} gap="48" align="center">
          <HStack w100={false} className={styles.user} gap="16" align="center">
            <img
              src={article[0].user.avatar}
              className={styles.avatar}
              alt=""
            />
            <Text className={styles.username}>{article[0].user.username}</Text>
          </HStack>
          <Text className={styles.date}>{article[0]?.createdAt}</Text>
        </HStack>
      </VStack>
    </div>
  ) : null;
};
