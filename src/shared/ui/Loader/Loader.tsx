import classNames from 'classnames';
import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
  blockSize?: number;
  spinnerSize?: number;
  borderDepth?: number;
}

export const Loader = ({
  className,
  blockSize = 50,
  spinnerSize = 50,
  borderDepth = 6,
}: LoaderProps) => {
  const spinnerStyles = {
    width: `${spinnerSize}px`,
    height: `${spinnerSize}px`,
    borderWidth: `${borderDepth}px`,
  };

  return (
    <div
      className={classNames(className, styles.loader)}
      style={{ width: blockSize, height: blockSize }}
    >
      <div style={spinnerStyles}>{}</div>
      <div style={spinnerStyles}>{}</div>
      <div style={spinnerStyles}>{}</div>
      <div style={spinnerStyles}>{}</div>
    </div>
  );
};
