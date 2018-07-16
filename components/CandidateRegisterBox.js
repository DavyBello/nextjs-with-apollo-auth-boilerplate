import { Mutation, withApollo } from 'react-apollo'
import { SIGNUP_CANDIDATE_MUTATION } from '../lib/graphql/mutations'
import storeToken from '../lib/auth/storeToken'
import redirect from '../lib/redirect'

const RegisterBox = ({ client }) => {
  let firstname, lastname, email, password

  return (
    <Mutation mutation={SIGNUP_CANDIDATE_MUTATION} onCompleted={({candidateCreateAccount: {jwt}}) => {
      // Store the token in browser cookies
      storeToken(jwt);
      // Force a reload of all the current queries now that the user is
      // logged in
      client.cache.reset().then(() => {
        redirect({}, '/')
      })
    }} onError={(error) => {
      // If you want to send error to external service?
      console.log(error)
    }}>
      {(candidateCreateAccount, { data, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()

          candidateCreateAccount({
            variables: {
              firstname: firstname.value,
              lastname: lastname.value,
              email: email.value,
              password: password.value
            }
          })

          lastname.value = firstname.value = email.value = password.value = ''
        }}>
          {error && <p>Issue occured while registering :(</p>}
          <input name='firstname' placeholder='firstName' ref={node => { firstname = node }} /><br />
          <input name='lastname' placeholder='lastName' ref={node => { lastname = node }} /><br />
          <input name='email' placeholder='Email' ref={node => { email = node }} /><br />
          <input name='password' placeholder='Password' ref={node => { password = node }} type='password' /><br />
          <button>Register</button>
        </form>
      )}

    </Mutation>
  )
}

export default withApollo(RegisterBox)
