import fsPromises from 'fs/promises';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import path from 'path';

export const getAllNavData = async (locale) => {
  const navFilePath = path.join(
    process.cwd(),
    `locales/${locale}/navigation.json`
  );
  const navJsonData = await fsPromises.readFile(navFilePath);
  const navData = JSON.parse(navJsonData);

  return {
    navData,
  };
};

export const getAllServerSideData = async ({ locale, pageKey }) => {
  const { navData } = await getAllNavData(locale);

  return {
    ...(await serverSideTranslations(locale, pageKey)),
    navData,
  };
};
