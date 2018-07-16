import React, { Component } from 'react'

import redirect from '../lib/redirect'
import checkCandidateLoggedIn from '../lib/auth/checkCandidateLoggedIn'

export default function requireCandidate(Child) {
    class WrappedComponent extends Component {
        static async getInitialProps(context) {
            let ChildProps = {};

            if (Child.getInitialProps) {
                ChildProps = await Child.getInitialProps(context)
            }

            //Validate loggedin user
            const { isAuthenticated } = await checkCandidateLoggedIn(context.apolloClient)

            if (!isAuthenticated) {
                // If not signed in, send them somewhere more useful
                redirect(context, '/signin')
            }

            return {
                ...ChildProps,
                isAuthenticated
            }
        }

        render() {
            return (
                <Child />
            )
        }
    }

    return (WrappedComponent)
}
