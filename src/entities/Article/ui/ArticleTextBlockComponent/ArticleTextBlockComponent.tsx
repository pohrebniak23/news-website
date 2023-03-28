import classNames from 'classnames';
import { memo, useId } from 'react';
import { Text, TextSize } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
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
    const id = useId();

    return (
      <div className={classNames(className, styles.articleTextBlockComponent)}>
        {block.title && withTitle && (
          <Title variant="h2" id={id} className={styles.title} size="m">
            {block.title}
          </Title>
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
