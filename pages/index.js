import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllNavData } from '../utils';

export async function getServerSideProps({ locale }) {
  const { navData } = await getAllNavData(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['pages/home'])),
      navData,
      locale,
    },
  };
}

export default function Home() {
  const { t } = useTranslation('pages/home');
  return <h1>{t('title')}</h1>;
}
