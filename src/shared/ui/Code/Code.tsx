import classNames from 'classnames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/copy-icon.svg';
import { Button } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  codeContent: string;
}

export const Code = memo(({ className, codeContent }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(codeContent);
  }, [codeContent]);

  return (
    <pre className={classNames(className, styles.code)}>
      <Button onClick={onCopy} theme="clear" className={styles.copyBtn}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{codeContent}</code>
    </pre>
  );
});
