import { useTranslation } from 'next-i18next';
import React from 'react';

function ContactTr() {
  const { t } = useTranslation('pages/contact');
  return (
    <>
      <h1>{t('title')}</h1>
      <div>Ayrı Component olduğundan ayrı sayfa yapılabilir</div>
    </>
  );
}

export default ContactTr;
