import { Fragment, Component } from 'react'
import Link from 'next/link'

import redirect from '../lib/redirect'
import checkCandidateLoggedIn from '../lib/auth/checkCandidateLoggedIn'

import CandidateRegisterBox from '../components/CandidateRegisterBox'

export default class CreateAccount extends Component {
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
        {/* CandidateRegisterBox handles all register logic. */}
        <CandidateRegisterBox />
        <hr />
        Already have an account? <Link prefetch href='/signin'><a>Sign in</a></Link>
      </Fragment>
    )
  }
};
