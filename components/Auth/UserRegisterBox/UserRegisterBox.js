import { Mutation, withApollo } from 'react-apollo'
import { SIGNUP_USER_MUTATION } from '../../../lib/graphql/mutations'
import storeToken from '../../../lib/auth/storeToken'
import redirect from '../../../lib/auth/redirect'

const RegisterBox = ({ client }) => {
  let name, username, email, password

  return (
    <Mutation mutation={SIGNUP_USER_MUTATION} onCompleted={({userCreateAccount: {token}}) => {
      // Store the token in browser cookies
      storeToken(token);
      // Force a reload of all the current queries now that the user is
      // logged in
      client.cache.reset().then(() => {
        redirect({}, '/')
      })
    }} onError={(error) => {
      // If you want to send error to external service?
      console.log(error)
    }}>
      {(userCreateAccount, { data, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()

          userCreateAccount({
            variables: {
              name: name.value,
              username: username.value,
              email: email.value,
              password: password.value
            }
          })

          username.value = name.value = email.value = password.value = ''
        }}>
          {error && <p>Issue occured while registering :(</p>}
          <input name='name' placeholder='Name' ref={node => { name = node }} /><br />
          <input name='username' placeholder='Username' ref={node => { username = node }} /><br />
          <input name='email' placeholder='Email' ref={node => { email = node }} /><br />
          <input name='password' placeholder='Password' ref={node => { password = node }} type='password' /><br />
          <button>Register</button>
        </form>
      )}

    </Mutation>
  )
}

export default withApollo(RegisterBox)
