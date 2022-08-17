import React from 'react';
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getAllNavData } from '../utils';

export async function getServerSideProps({locale}) {
  const { navData } = await getAllNavData(locale)

  return {
    props: { ...(await serverSideTranslations(locale,["pages/about"])), navData, locale },
  };
}

function About({locale}) {
  const { t } = useTranslation('pages/about');
  
  const router = useRouter()
  const { defaultLocale } = router

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
    </div>
  )
}

export default About