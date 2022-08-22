import React from 'react'
import { format, utcToZonedTime } from 'date-fns-tz'
import { en, tr } from "date-fns/locale"
import { getAllServerSideData } from '../utils';
import { getBlogs } from '../api/getBlogs';

const allLocales = { en, tr }

export async function getServerSideProps({ locale }) {
  const data = await getAllServerSideData({ locale, pageKey: ['pages/home'] });
  const blogs = await getBlogs(locale)

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
  if (blogs.error) {
    return <p>{blogs.error}</p>
  }

  return (
    <div>
      <ul>
        {blogs?.result?.data?.map(post => <li key={post.id}>{post.attributes.title} - {formatPublishedAt(post.attributes.publishedAt, locale)}</li>)}
      </ul>
    </div>
  )
}

export default blog