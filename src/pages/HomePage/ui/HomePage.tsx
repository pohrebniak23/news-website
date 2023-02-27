import { BugButton } from 'app/providers/ErrorBoundary';
// import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div>
        <Text>{t('Hi, its a home page')}</Text>

        <BugButton />

        {/* <Counter /> */}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
