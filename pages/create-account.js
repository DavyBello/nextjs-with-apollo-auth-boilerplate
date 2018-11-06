import { Component } from 'react'
import Link from 'next/link'

import redirectIfUserLoggedIn from '../hocs/redirectIfUserLoggedIn';

import UserRegisterBox from '../components/Auth/UserRegisterBox'

class CreateAccount extends Component {
  render () {
    return (
      <>
        {/* UserRegisterBox handles all register logic. */}
        <UserRegisterBox />
        <hr />
        Already have an account? <Link prefetch href='/signin'><a>Sign in</a></Link>
      </>
    )
  }
};

export default redirectIfUserLoggedIn(CreateAccount)
