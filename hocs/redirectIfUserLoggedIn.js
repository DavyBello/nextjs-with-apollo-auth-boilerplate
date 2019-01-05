import React, { Component } from 'react'

// import redirect from '../lib/auth/redirect'
// import checkUserLoggedIn from '../lib/auth/checkUserLoggedIn'

export default function redirectUser(Child) {
    class WrappedComponent extends Component {
        static async getInitialProps(context) {
            let ChildProps = {};

            if (Child.getInitialProps) {
                ChildProps = await Child.getInitialProps(context)
            }

            //Validate loggedin user
            // const { isAuthenticated } = await checkUserLoggedIn(context.apolloClient)
            // if (isAuthenticated) {
            //     // If signed in, send them somewhere more useful
            //     redirect(context, '/')
            // }

            return {
                ...ChildProps,
                // isAuthenticated
            }
        }

        render() {
            return <Child {...this.props}/>
        }
    }

    return (WrappedComponent)
}
