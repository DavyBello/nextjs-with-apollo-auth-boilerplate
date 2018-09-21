import { Component } from 'react';
import { ApolloConsumer } from 'react-apollo'

import signout from '../lib/auth/signout'
import requireUserLoggedIn from '../hoc/requireUserLoggedIn';

import { IndexPageProvider } from '../contexts/pages/indexPage';
import UserDetailsSection from '../components/UserDetailsSection';

class Index extends Component {
    render(){
        return <div>
            <IndexPageProvider>
                <UserDetailsSection />
                <ApolloConsumer>
                  {client => (
                    <button onClick={()=>signout(client)}>Sign out</button>
                  )}
                </ApolloConsumer>
            </IndexPageProvider>
        </div>
    }
}

export default requireUserLoggedIn(Index)
