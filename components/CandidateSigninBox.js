import { Mutation, withApollo } from 'react-apollo'
import { LOGIN_USER_MUTATION } from '../lib/graphql/mutations'
import storeToken from '../lib/auth/storeToken'
import redirect from '../lib/redirect'

// TODO: Find a better name for component.
const SigninBox = ({ client }) => {
  let email, password

  return (
    <Mutation mutation={LOGIN_USER_MUTATION} onCompleted={({loginUser: {jwt}}) => {
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
      {(loginUser, { data, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()

          loginUser({
            variables: {
              email: email.value,
              password: password.value
            }
          })

          email.value = password.value = ''
        }}>
          {error && <p>No user found with that information.</p>}
          <input name='email' placeholder='Email' ref={node => { email = node }} /><br />
          <input name='password' placeholder='Password' ref={node => { password = node }} type='password' /><br />
          <button>Sign in</button>
        </form>
      )}
    </Mutation>
  )
}

export default withApollo(SigninBox)
