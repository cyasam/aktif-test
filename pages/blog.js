import React from 'react'
import axios from 'axios';
import { format, utcToZonedTime } from 'date-fns-tz'
import { en, tr } from "date-fns/locale"
import { getAllServerSideData } from '../utils';

const allLocales = { en, tr }

export async function getServerSideProps({ locale }) {
  const data = await getAllServerSideData({ locale, pageKey: ['pages/home'] });

  const { data: blogs } = await axios.get(`${process.env.STRAPI_API}/api/blogs?locale=${locale}`)

  return {
    props: {
      ...data,
      locale,
      blogs
    },
  };
}

const formatPublishedAt = (date, locale) => {
  const timeZone = 'Europe/Istanbul'
  const zonedDate = utcToZonedTime(date, timeZone)
  return format(zonedDate, 'PP', { timeZone, locale: allLocales[locale] });
}

function blog({ blogs, locale }) {

  return (
    <div>
      <ul>
        {blogs.data.map(post => <li key={post.id}>{post.attributes.title} - {formatPublishedAt(post.attributes.publishedAt, locale)}</li>)}
      </ul>
    </div>
  )
}

export default blog