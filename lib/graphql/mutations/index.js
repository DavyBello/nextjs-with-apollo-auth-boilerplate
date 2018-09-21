import { gql } from 'apollo-boost'

export const SIGNUP_USER_MUTATION = gql `
mutation ($name: String!, $username: String!, $email: String!, $password: String!){
  userCreateAccount(input: {
    name: $name,
    username: $username,
    email: $email,
    password: $password
  }){
    token
    name
  }
}
`

export const LOGIN_USER_MUTATION = gql `
  mutation Login($email: String!, $password: String!) {
    loginUser(input: {
      email: $email,
      password: $password
    }){
      token
      name
    }
  }
`
