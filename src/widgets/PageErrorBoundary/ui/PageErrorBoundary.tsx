import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'shared/contexts';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text';
import '../../../app/styles/index.scss';
import styles from './PageErrorBoundary.module.scss';

export const PageErrorBoundary = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <ThemeProvider>
      <div className={classNames('app', styles.pageErrorBoundary)}>
        <Text className={styles.title} size="medium">
          {t('Error, somtething went wrong')}
        </Text>
        <Button onClick={reloadPage} theme="outline" className={styles.button}>
          {t('Reload page')}
        </Button>
      </div>
    </ThemeProvider>
  );
};
