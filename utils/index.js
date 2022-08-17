import fsPromises from 'fs/promises';
import path from 'path';

export const getAllNavData = async (locale) => {
  const navFilePath = path.join(process.cwd(),`locales/${locale}/navigation.json`);
  const navJsonData = await fsPromises.readFile(navFilePath);
  const navData = JSON.parse(navJsonData);

  return {
    navData,
  }
}