import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import ContactTr from '../containers/pages/ContactTr';
import { getAllNavData } from '../utils';

export async function getServerSideProps({ locale }) {
  const { navData } = await getAllNavData(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['pages/contact'])),
      navData,
      locale,
    },
  };
}

function Contact({ locale }) {
  const { t } = useTranslation('pages/contact');
  return <div>{locale === 'tr' ? <ContactTr /> : <h1>{t('title')}</h1>}</div>;
}

export default Contact;
