import { Component } from 'react'
import Link from 'next/link'

// import redirectIfUserLoggedIn from '../hocs/redirectIfUserLoggedIn';

import UserSigninBox from '../components/Auth/UserSigninBox'
// import GoogleButton from '../components/Auth/Social/GoogleButton'
import LinkedInButton from '../components/Auth/Social/LinkedInButton'

class Signin extends Component {
  render () {
    return (
      <>
        {/* UserSigninBox handles all login logic. */}
        <UserSigninBox />
        <hr />
        Login With
        <LinkedInButton />
        {/* <GoogleButton /> */}
        <hr />
        New? <Link prefetch href='/create-account'><a>Create account</a></Link>
      </>
    )
  }
}

export default (Signin)
// export default redirectIfUserLoggedIn(Signin)
