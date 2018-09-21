import { USER_ISAUTHENTICATED_QUERY } from '../graphql/queries'
export default apolloClient => (
  apolloClient.query({
    query: USER_ISAUTHENTICATED_QUERY
  }).then(({ data }) => {
    // will return true if user is authenticated
    return { isAuthenticated: data.userIsAuthenticated }
  }).catch(() => {
    // Fail gracefully
    return { isAuthenticated: false }
  })
)
