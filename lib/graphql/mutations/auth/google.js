import { gql } from 'apollo-boost'

export const GOOGLE_AUTH_MUTATION = gql `
  mutation ($accessToken: String!) {
    authGoogle(input: {
      accessToken: $accessToken
    }){
      token
      name
    }
  }
`
