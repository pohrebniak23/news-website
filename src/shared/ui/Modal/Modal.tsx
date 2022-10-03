import classNames from 'classnames';
import { FC, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(styles.modal, {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={styles.content}
            onClick={(event) => onContentClick(event)}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
