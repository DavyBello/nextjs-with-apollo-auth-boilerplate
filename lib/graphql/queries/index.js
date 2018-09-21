import { gql } from 'apollo-boost'

// NOTE returns true if user is authenticated and false otherwise
export const USER_ISAUTHENTICATED_QUERY = gql`
  query {
    userIsAuthenticated
  }
`
// returns details of user making the request
export const HOME_VIEWER_USER_QUERY = gql`
  query {
    viewer {
      me {
        _id
        name
        email
        isActivated
      }
    }
  }
`
