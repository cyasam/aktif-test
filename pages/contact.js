import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { getAllServerSideData } from '../utils';

const ContactTr = dynamic(() => import('../containers/pages/ContactTr'));

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
