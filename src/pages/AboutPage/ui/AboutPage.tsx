import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <div>
        <Text>{t('About page')}</Text>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
