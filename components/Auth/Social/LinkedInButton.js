import { LinkedIn } from "../../react-linkedin-login-oauth2";
import { Mutation, withApollo } from "react-apollo";
import { LINKED_IN_AUTH_MUTATION } from "../../../lib/graphql/mutations";
import storeToken from "../../../lib/auth/storeToken";
import redirect from "../../../lib/auth/redirect";

const onFailure = error => {
  alert(error);
};

const handleFailure = (error) => {
  this.setState({
    code: '',
    errorMessage: error.errorMessage,
  });
}

const LinkedInButton = ({ client }) => <Mutation
  mutation={LINKED_IN_AUTH_MUTATION}
  onCompleted={({ authLinkedIn: { token } }) => {
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
  {(runMutation, { data, error }) => (
    <LinkedIn
      clientId={process.env.LINKEDIN_CLIENTID}
      onFailure={handleFailure}
      redirectUri="http://localhost:3000/linkedin"
      // text="LinkedIn"
      onSuccess={data => {
        console.log(data);
        const { code } = data;
        // runMutation({variables: { accessToken }})
      }}
    >LinkedIn</LinkedIn>
  )}
</Mutation>

export default withApollo(LinkedInButton)
