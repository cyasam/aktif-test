import fsPromises from 'fs/promises';
import path from 'path';

export const getAllPageData = async (page, locale) => {
  const navFilePath = path.join(process.cwd(),`locales/${locale}/navigation.json`);
  const navJsonData = await fsPromises.readFile(navFilePath);
  const navData = JSON.parse(navJsonData);

  const pageFilePath = path.join(process.cwd(),`locales/${locale}/pages/${page}.json`);
  const pageJsonData = await fsPromises.readFile(pageFilePath);
  const pageData = JSON.parse(pageJsonData);

  return {
    navData,
    pageData
  }
}