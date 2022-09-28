import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />

      {t('Home page')}
      {t('Information')}
    </div>
  );
};

export default HomePage;
