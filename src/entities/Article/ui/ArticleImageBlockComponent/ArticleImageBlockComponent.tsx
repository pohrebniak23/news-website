import classNames from 'classnames';
import { memo, useId } from 'react';
import { Title } from 'shared/ui/Title';
import { ArticleBlockImage } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    const id = useId();

    return (
      <div className={classNames(className, styles.articleImageBlockComponent)}>
        <img className={styles.image} src={block.src} alt={block.title} />

        <Title variant="h3" id={id} className={styles.title}>
          {block.title}
        </Title>
      </div>
    );
  },
);
