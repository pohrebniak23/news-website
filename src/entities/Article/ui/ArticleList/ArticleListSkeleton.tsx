import classNames from 'classnames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
      <div className={classNames(className, styles.skeletonItem)}>
        <Skeleton width="100%" height="180px" borderRadius="6px" />
        <Skeleton
          className={styles.skeletonTitle}
          width="100%"
          height="20px"
          borderRadius="6px"
        />
        <Skeleton
          className={styles.skeletonTitle}
          width="100%"
          height="20px"
          borderRadius="6px"
        />
        <Skeleton
          className={styles.skeletonTitle}
          width="40%"
          height="20px"
          borderRadius="6px"
        />
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.skeletonItem)}>
      <div className={styles.skeletonBlock}>
        <div className={styles.skeletonInfo}>
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
        </div>

        <Skeleton width="250px" height="250px" borderRadius="6px" />
      </div>
    </div>
  );
};
