import React from 'react';
import ContactTr from '../containers/pages/ContactTr';
import { getAllNavData } from '../utils';

export async function getServerSideProps({ locale }) {
  const { navData } = await getAllNavData(locale);

  return {
    props: { navData, locale },
  };
}

function Contact({ locale }) {
  return <div>{locale === 'tr' ? <ContactTr /> : <h1>Contact</h1>}</div>;
}

export default Contact;
