import { Component } from 'react'
import Link from 'next/link'

// import redirectIfUserLoggedIn from '../hocs/redirectIfUserLoggedIn';

import UserRegisterBox from '../components/Auth/UserRegisterBox'
import LinkedInButton from '../components/Auth/RegisterSocial/LinkedInButton'

class CreateAccount extends Component {
  render () {
    return (
      <>
        {/* UserRegisterBox handles all register logic. */}
        <UserRegisterBox />
        <hr />
        Login With
        <LinkedInButton />
        <hr />
        Already have an account? <Link prefetch href='/signin'><a>Sign in</a></Link>
      </>
    )
  }
};

export default CreateAccount
// export default redirectIfUserLoggedIn(CreateAccount)
