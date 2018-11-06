import { GoogleLogin } from "react-google-login";
import { Mutation, withApollo } from "react-apollo";
import { GOOGLE_AUTH_MUTATION } from "../../../lib/graphql/mutations";
import storeToken from "../../../lib/auth/storeToken";
import redirect from "../../../lib/auth/redirect";

const onFailure = error => {
  alert(error);
};

const GoogleButton = ({ client }) => <Mutation
  mutation={GOOGLE_AUTH_MUTATION}
  onCompleted={({ authGoogle: { token } }) => {
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
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENTID}
      buttonText="Google"
      onSuccess={response => {
        // console.log(response);
        const { accessToken } = response;
        runMutation({variables: { accessToken }})
      }}
      onFailure={onFailure}
    />
  )}
</Mutation>

export default withApollo(GoogleButton)
