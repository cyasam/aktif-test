import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router'
import Header from '../components/Header'

export async function getServerSideProps({ locale, locales }) {
  const filePath = path.join(process.cwd(),'data/nav.json');
  const jsonData = await fsPromises.readFile(filePath);
  const navData = JSON.parse(jsonData);

  return {
    props: { navData,locale, locales },
  };
}

function About({navData,...props}) {
  const router = useRouter()
  const { defaultLocale } = router
  return (
    <div>
      <Header navData={navData} />
      <div>
        <h1>About</h1>
        <p>Current locale: {props.locale}</p>
        <p>Default locale: {defaultLocale}</p>
      </div>
    </div>
  )
}

export default About