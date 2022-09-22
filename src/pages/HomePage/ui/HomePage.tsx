import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return <div>
    {t("Home page")},
    {t('Information')}
  </div>;
};

export default HomePage;
