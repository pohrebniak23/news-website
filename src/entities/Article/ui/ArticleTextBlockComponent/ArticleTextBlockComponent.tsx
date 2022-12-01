import classNames from 'classnames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockText } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleBlockText;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(className, styles.articleTextBlockComponent)}>
        {block.title && (
          <Text className={styles.title} size="medium">
            {block.title}
          </Text>
        )}

        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} className={styles.text}>
            {paragraph}
          </Text>
        ))}
      </div>
    );
  },
);
