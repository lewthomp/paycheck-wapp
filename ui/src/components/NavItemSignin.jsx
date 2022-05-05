import React from "react";
import {GoogleLogin} from "react-google-login";
import graphqlFetch from "../graphqlFetch";

import { googleLoginQuery } from "../queries";

const handleLogin = async (googleData) => {
    const query = googleLoginQuery;
    const data = graphqlFetch(query);
  }

const NavItemSignin = () => {
  return (
    <div>
      <GoogleLogin 
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
      />
    </div>
    )
};

export default NavItemSignin;