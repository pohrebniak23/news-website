import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ButtonTheme } from '../../../../shared/ui/Button/Button';
import styles from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.loginform}>
      <div className={styles.item}>
        <h2 className={styles.label}>{t('Username')}</h2>
        <Input autofocus className={styles.input} />
      </div>
      <div className={styles.item}>
        <h2 className={styles.label}>{t('Password')}</h2>
        <Input className={styles.input} />
      </div>
      <Button theme={ButtonTheme.MODAL}>{t('Войти')}</Button>
    </div>
  );
};
