import classNames from 'classnames';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  children: ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  className,
  lazy,
  children,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsOpening(false);
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
    let timeoutId: any;

    if (isOpen) {
      setIsMounted(true);

      timeoutId = setTimeout(() => {
        setIsOpening(true);
      }, 10);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          styles.modal,
          {
            [styles.opening]: isOpening,
          },
          className,
        )}
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
