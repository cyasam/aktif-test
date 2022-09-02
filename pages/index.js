import { useTranslation } from 'next-i18next';
import { getAllServerSideData } from '../utils';

export async function getStaticProps({ locale }) {
  const data = await getAllServerSideData({ locale, pageKey: ['pages/home'] });

  return {
    props: {
      ...data,
    },
  };
}

export default function Home() {
  const { t } = useTranslation('pages/home');
  return <h1>{t('title')}</h1>;
}
