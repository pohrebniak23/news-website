import classNames from 'classnames';
import { loginByUsername } from 'features/AuthByUsername/models/services/loginByUsername';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ButtonTheme } from '../../../../shared/ui/Button/Button';
import { getLoginError } from '../../models/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../models/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../models/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../models/selectors/getLoginUsername/getLoginUsername';
import { LoginActions, LoginReducer } from '../../models/slices/LoginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useDynamicReducerLoader('loginForm', LoginReducer);

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value) => {
      dispatch(LoginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(className, styles.loginform)}>
      <div className={styles.fields}>
        <div className={styles.item}>
          <h2 className={styles.label}>{t('Username')}</h2>
          <Input
            autofocus
            className={styles.input}
            value={username}
            onChange={(value) => onChangeUsername(value)}
          />
        </div>
        <div className={styles.item}>
          <h2 className={styles.label}>{t('Password')}</h2>
          <Input
            type="password"
            className={styles.input}
            value={password}
            onChange={(value) => onChangePassword(value)}
          />
        </div>
      </div>

      {error && (
        <Text className={styles.error} theme={TextTheme.ERROR}>
          {error}
        </Text>
      )}

      <Button
        className={styles.button}
        theme={ButtonTheme.MODAL}
        onClick={onLoginSubmit}
        isLoading={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
