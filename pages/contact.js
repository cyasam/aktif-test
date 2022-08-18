import React from 'react';
import { useTranslation } from 'next-i18next';
import ContactTr from '../containers/pages/ContactTr';
import { getAllServerSideData } from '../utils';

export async function getServerSideProps({ locale }) {
  const data = await getAllServerSideData({
    locale,
    pageKey: ['pages/contact'],
  });

  return {
    props: {
      ...data,
      locale,
    },
  };
}

function Contact({ locale }) {
  const { t } = useTranslation('pages/contact');
  return <div>{locale === 'tr' ? <ContactTr /> : <h1>{t('title')}</h1>}</div>;
}

export default Contact;
