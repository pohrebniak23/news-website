import classNames from 'classnames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  center?: boolean;
}

export const PageLoader = ({ center }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.pageLoader, { [styles.center]: center })}>
      <Loader />
    </div>
  );
};
