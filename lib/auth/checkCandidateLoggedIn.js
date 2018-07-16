import { CANDIDATE_ISAUTHENTICATED_QUERY } from '../graphql/queries'
export default apolloClient => (
  apolloClient.query({
    query: CANDIDATE_ISAUTHENTICATED_QUERY
  }).then(({ data }) => {
    // NOTE will return true if candidate is authenticated
    return { isAuthenticated: data.candidateIsAuthenticated}
  }).catch(() => {
    // Fail gracefully
    return { isAuthenticated: false }
  })
)
