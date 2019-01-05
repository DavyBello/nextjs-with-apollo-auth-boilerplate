import { gql } from 'apollo-boost'

export const LINKED_IN_AUTH_MUTATION = gql `
  mutation ($accessToken: String!) {
    authLinkedIn(input: {
      accessToken: $accessToken
    }){
      token
      name
    }
  }
`
