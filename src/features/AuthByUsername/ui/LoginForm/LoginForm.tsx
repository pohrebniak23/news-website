import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getLoginError } from '../../models/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../models/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../models/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../models/selectors/getLoginUsername/getLoginUsername';
import { LoginActions, LoginReducer } from '../../models/slices/LoginSlice';
import { loginByUsername } from '../../models/services/loginByUsername';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducerLoader({ loginForm: LoginReducer });

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

  const onLoginSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <div className={classNames(className, styles.loginform)}>
      <div className={styles.fields}>
        <div className={styles.item}>
          <h2 className={styles.label}>{t('Username')}</h2>
          <Input
            autofocus
            className={styles.input}
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className={styles.item}>
          <h2 className={styles.label}>{t('Password')}</h2>
          <Input
            type="password"
            className={styles.input}
            value={password}
            onChange={onChangePassword}
          />
        </div>
      </div>

      {error && (
        <Text className={styles.error} theme="error">
          {error}
        </Text>
      )}

      <Button
        className={styles.button}
        theme="modal"
        onClick={onLoginSubmit}
        size="medium"
        isLoading={isLoading}
      >
        {t('Log in')}
      </Button>
    </div>
  );
});

export default LoginForm;
