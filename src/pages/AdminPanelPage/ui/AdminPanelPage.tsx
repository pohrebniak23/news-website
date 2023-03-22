import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AdminPanelPage = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <div>
        <Text>{t('Admin panel')}</Text>
      </div>
    </PageWrapper>
  );
};

export default AdminPanelPage;
