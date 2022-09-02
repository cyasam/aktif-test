import { gql } from '@apollo/client';
import axios from 'axios';
import { client } from '../client';

const GET_BLOGS = gql`
query GetBlogs($locale: I18NLocaleCode){
  blogs(locale: $locale) {
    data {
      id
      attributes {
        title
        publishedAt
        localizations {
          data {
            id
            attributes {
              locale
            }
          }
        }
      }
    }
  }
}`

export const getBlogsGraphQl = async (locale) => {
  try {
    const { data: { blogs: result } } = await client.query({
      query: GET_BLOGS, variables: {
        locale
      }
    })

    return { result, error: null }
  } catch (err) {
    return { result: null, error: err?.response?.statusText ?? "Server Error" }
  }

}

export const getBlogs = async (locale) => {
  try {
    const { data: result } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/blogs?locale=${locale}`)

    return { result, error: null }
  } catch (err) {
    return { result: null, error: err?.response?.statusText ?? "Server Error" }
  }
} 