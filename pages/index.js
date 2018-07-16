import { Component } from 'react';
import { IndexPageProvider } from '../contexts/pages/indexPage';
import { ApolloConsumer } from 'react-apollo'
import requireCandidateLoggedIn from '../hoc/requireCandidateLoggedIn';
import signout from '../lib/auth/signout'
import CandidateDetailsSection from '../components/CandidateDetailsSection';

class Index extends Component {
    render(){
        return <div>
            <IndexPageProvider>
                <CandidateDetailsSection />
                <ApolloConsumer>
                  {client => (
                    <button onClick={()=>signout(client)}>Sign out</button>
                  )}
                </ApolloConsumer>
            </IndexPageProvider>
        </div>
    }
}

export default requireCandidateLoggedIn(Index)
