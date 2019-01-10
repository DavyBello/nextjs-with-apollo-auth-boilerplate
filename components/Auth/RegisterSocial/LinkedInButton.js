import { LinkedIn } from "../../react-linkedin-login-oauth2";
import { Mutation, withApollo } from "react-apollo";
import { LINKED_IN_REGISTER_EMPLOYER_MUTATION } from "../../../lib/graphql/mutations";
import storeToken from "../../../lib/auth/storeToken";
import redirect from "../../../lib/auth/redirect";

const handleFailure = (error) => {
  console.log(error);
  // this.setState({
  //   code: '',
  //   errorMessage: error.errorMessage,
  // });
}

const redirectUri = "http://localhost:3000/auth/linkedin"

const LinkedInButton = ({ client }) => <Mutation
  mutation={LINKED_IN_REGISTER_EMPLOYER_MUTATION}
  onCompleted={({ employerCreateAccountWithLinkedIn: { token } }) => {
    console.log('token');
    console.log(token);
    // Store the token in browser cookies
    storeToken(token);
    // Force a reload of all the current queries now that the user is
    // logged in
    client.cache.reset().then(() => {
      redirect({}, "/");
    });
  }}
  onError={error => console.log(error)}
>
  {(runMutation) => (
    <LinkedIn
      clientId={process.env.LINKEDIN_CLIENTID}
      onFailure={handleFailure}
      redirectUri={redirectUri}
      onSuccess={data => {
        const { code } = data;
        runMutation({variables: { input : { code, redirectUri }}});
      }}
    >LinkedIn</LinkedIn>
  )}
</Mutation>

export default withApollo(LinkedInButton)
