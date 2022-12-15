import classNames from 'classnames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleBlockText } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleBlockText;
  withTitle?: boolean;
  textSize?: TextSize;
}

export const ArticleTextBlockComponent = memo(
  ({
    className,
    block,
    withTitle = true,
    textSize,
  }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(className, styles.articleTextBlockComponent)}>
        {block.title && withTitle && (
          <Text className={styles.title} size="medium">
            {block.title}
          </Text>
        )}

        {block.paragraphs.map((paragraph) => (
          <Text size={textSize} key={paragraph} className={styles.text}>
            {paragraph}
          </Text>
        ))}
      </div>
    );
  },
);
