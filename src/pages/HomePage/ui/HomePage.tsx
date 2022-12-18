import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div>
        <BugButton />

        <Counter />

        {t('Home page')}
        {t('Information')}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
