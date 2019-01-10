import { LinkedInPopUp } from "../../components/react-linkedin-login-oauth2";

const Page = ({ query }) => {
    if (query.code || query.error) {
        return (
            <LinkedInPopUp />
        );
    }
    return <div> Next stars </div>
}

Page.getInitialProps = async ({ query }) => {
    return { query }
}

export default Page