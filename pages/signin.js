import { Component, Fragment } from 'react'
import Link from 'next/link'

import redirect from '../lib/redirect'
import checkCandidateLoggedIn from '../lib/auth/checkCandidateLoggedIn'

import CandidateSigninBox from '../components/CandidateSigninBox'

export default class Signin extends Component {
  static async getInitialProps (context) {
    const { isAuthenticated } = await checkCandidateLoggedIn(context.apolloClient)

    if (isAuthenticated) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/')
    }

    return {}
  }

  render () {
    return (
      <Fragment>
        {/* CandidateSigninBox handles all login logic. */}
        <CandidateSigninBox />
        <hr />
        New? <Link prefetch href='/create-account'><a>Create account</a></Link>
      </Fragment>
    )
  }
};
