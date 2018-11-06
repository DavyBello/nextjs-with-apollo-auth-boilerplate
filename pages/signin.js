import { Component } from 'react'
import Link from 'next/link'

import redirectIfUserLoggedIn from '../hocs/redirectIfUserLoggedIn';

import UserSigninBox from '../components/Auth/UserSigninBox'
import GoogleButton from '../components/Auth/Social/GoogleButton'

class Signin extends Component {
  render () {
    return (
      <>
        {/* UserSigninBox handles all login logic. */}
        <UserSigninBox />
        <hr />
        Login With
        <GoogleButton />
        <hr />
        New? <Link prefetch href='/create-account'><a>Create account</a></Link>
      </>
    )
  }
};

export default redirectIfUserLoggedIn(Signin)
