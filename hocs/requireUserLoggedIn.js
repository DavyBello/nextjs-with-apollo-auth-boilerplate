import React, { Component } from 'react'

import redirect from '../lib/auth/redirect'
import checkUserLoggedIn from '../lib/auth/checkUserLoggedIn'

export default function requireUser(Child) {
    class WrappedComponent extends Component {
        static async getInitialProps(context) {
            let ChildProps = {};

            if (Child.getInitialProps) {
                ChildProps = await Child.getInitialProps(context)
            }

            //Validate loggedin user
            const { isAuthenticated } = await checkUserLoggedIn(context.apolloClient)
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
            return <Child />
        }
    }

    return (WrappedComponent)
}
