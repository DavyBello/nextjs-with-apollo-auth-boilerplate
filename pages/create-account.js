import { Fragment, Component } from 'react'
import Link from 'next/link'

import redirectIfUserLoggedIn from '../hoc/redirectIfUserLoggedIn';

import UserRegisterBox from '../components/Auth/UserRegisterBox'

class CreateAccount extends Component {
  render () {
    return (
      <Fragment>
        {/* UserRegisterBox handles all register logic. */}
        <UserRegisterBox />
        <hr />
        Already have an account? <Link prefetch href='/signin'><a>Sign in</a></Link>
      </Fragment>
    )
  }
};

export default redirectIfUserLoggedIn(CreateAccount)
