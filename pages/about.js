import React from 'react';
import { useRouter } from 'next/router'
import { getAllPageData } from '../utils';

export async function getServerSideProps(context) {
  const { navData, pageData } = await getAllPageData(context)

  return {
    props: { navData, pageData, locale: context.locale },
  };
}

function About({pageData,locale}) {
  const router = useRouter()
  const { defaultLocale } = router
  return (
    <div>
      <h1>{pageData.title}</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
    </div>
  )
}

export default About