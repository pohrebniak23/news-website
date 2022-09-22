import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Home page')}
      {t('Information')}
    </div>
  );
};

export default HomePage;
