import { gql } from 'apollo-boost'

export const SIGNUP_CANDIDATE_MUTATION = gql `
mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  candidateCreateAccount(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    token
  }
}
`

export const LOGIN_USER_MUTATION = gql `
  mutation Login($email: String!, $password: String!) {
    loginUser ( email: $email, password: $password ) {
      jwt
      userType
      name
    }
  }
`
