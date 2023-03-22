import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return (
    <PageWrapper>
      <div>
        <Text>{t('Forbidden')}</Text>
      </div>
    </PageWrapper>
  );
};

export default ForbiddenPage;
