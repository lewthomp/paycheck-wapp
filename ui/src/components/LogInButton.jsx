import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogInButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>log in</button>; 
  }

export default LogInButton;