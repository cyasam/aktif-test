import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getAllServerSideData } from '../utils';

export async function getServerSideProps({ locale }) {
  const data = await getAllServerSideData({ locale, pageKey: ['pages/about'] });

  return {
    props: {
      ...data,
      locale,
    },
  };
}

function About({ locale }) {
  const { t } = useTranslation('pages/about');

  const router = useRouter();
  const { defaultLocale } = router;

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
    </div>
  );
}

export default About;
