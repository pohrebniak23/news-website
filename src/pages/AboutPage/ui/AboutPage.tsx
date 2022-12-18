import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <div>
        {t('About page')}

        <Counter />
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
