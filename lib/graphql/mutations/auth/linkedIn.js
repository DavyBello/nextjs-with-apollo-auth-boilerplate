import { gql } from 'apollo-boost'

export const LINKED_IN_AUTH_MUTATION = gql`
  mutation ($input: LoginWithLinkedInInput!) {
    loginLinkedIn(input: $input){
      token
      name
    }
  }
`

export const LINKED_IN_REGISTER_EMPLOYER_MUTATION = gql`
  mutation ($input: EmployerCreateAccountWithLinkedInInput!) {
    employerCreateAccountWithLinkedIn(input: $input){
      token
      name
    }
  }
`
