import classNames from 'classnames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from '../../model/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames(className, styles.articleCodeBlockComponent)}>
        <Code codeContent={block.code} />
      </div>
    );
  },
);
