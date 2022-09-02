import { gql } from '@apollo/client';
import { client } from '../client';

export const GET_NAVIGATION = gql`
query GetNavigations($slug: String!, $locale: I18NLocaleCode) {
  renderNavigation(navigationIdOrSlug: $slug, locale: $locale) {
    id
    title
    path
  }
}`

export const getNavigationGraphQl = async (locale) => {
  try {
    const { data: { renderNavigation: result } } = await client.query({
      query: GET_NAVIGATION, variables: {
        slug: "navigation",
        locale
      }
    })

    return { result, error: null }
  } catch (err) {
    return { result: null, error: err?.response?.statusText ?? "Server Error" }
  }
}