import { gql } from '@apollo/client';
import { client } from '../client';

export const GET_NAVIGATION = gql`
query GetNavigations($id: String!, $locale: I18NLocaleCode) {
  renderNavigation(navigationIdOrSlug: $id, locale: $locale) {
    id
    title
    path
  }
}`

export const getNavigationGraphQl = async (locale) => {
  try {
    const { data: { renderNavigation: result } } = await client.query({
      query: GET_NAVIGATION, variables: {
        id: "1",
        locale
      }
    })

    return { result, error: null }
  } catch (err) {
    return { result: null, error: err?.response?.statusText ?? "Server Error" }
  }
}