import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
