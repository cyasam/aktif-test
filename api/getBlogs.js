import axios from 'axios';

export const getBlogs = async (locale) => {
  try {
    const { data: result } = await axios.get(`${process.env.STRAPI_API}/api/blogs?locale=${locale}`)

    return { result, error: null }
  } catch (err) {
    return { result: null, error: err?.response?.statusText ?? "Server Error" }
  }
} 