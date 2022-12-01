import classNames from 'classnames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockImage } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames(className, styles.articleImageBlockComponent)}>
        <img className={styles.image} src={block.src} alt={block.title} />

        <Text className={styles.title}>{block.title}</Text>
      </div>
    );
  },
);
