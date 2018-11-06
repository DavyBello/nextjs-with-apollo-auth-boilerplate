import { Component, Fragment } from 'react'
import Link from 'next/link'

import redirectIfUserLoggedIn from '../hoc/redirectIfUserLoggedIn';

import UserSigninBox from '../components/Auth/UserSigninBox'
import GoogleButton from '../components/Auth/Social/GoogleButton'

class Signin extends Component {
  render () {
    return (
      <Fragment>
        {/* UserSigninBox handles all login logic. */}
        <UserSigninBox />
        <hr />
        Login With
        <GoogleButton />
        <hr />
        New? <Link prefetch href='/create-account'><a>Create account</a></Link>
      </Fragment>
    )
  }
};

export default redirectIfUserLoggedIn(Signin)
