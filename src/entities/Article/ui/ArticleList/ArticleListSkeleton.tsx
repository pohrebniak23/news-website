import classNames from 'classnames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';

interface ArticleListSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListSkeleton = ({
  className,
  view,
}: ArticleListSkeletonProps) => {
  if (view === ArticleView.TILE) {
    return (
      <VStack className={classNames(className, styles.skeletonItem)}>
        <Skeleton width="100%" height="250px" borderRadius="12px" />
        <VStack className={styles.content} gap="8">
          <Skeleton
            className={styles.skeletonTitle}
            width="100%"
            height="20px"
            borderRadius="12px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="100%"
            height="20px"
            borderRadius="12px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="40%"
            height="20px"
            borderRadius="12px"
          />
        </VStack>
      </VStack>
    );
  }

  return (
    <HStack className={classNames(className, styles.skeletonItem)}>
      <HStack justify="between" className={styles.skeletonBlock}>
        <VStack gap="8">
          <Skeleton
            className={styles.skeletonAvatar}
            width="100px"
            height="100px"
            borderRadius="50px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="50%"
            height="20px"
            borderRadius="6px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="50%"
            height="20px"
            borderRadius="6px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="400px"
            height="20px"
            borderRadius="6px"
          />
          <Skeleton
            className={styles.skeletonTitle}
            width="250px"
            height="20px"
            borderRadius="6px"
          />
        </VStack>

        <Skeleton width="250px" height="250px" borderRadius="6px" />
      </HStack>
    </HStack>
  );
};
