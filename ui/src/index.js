import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Page from "./Page";

const root = (
  <Router>
    <Auth0Provider
      domain="dev-3rv11wmi.us.auth0.com"
      clientId="NW6jHIIDRpXfk9fZVL7FgeG7XfxYwEAz"
      redirectUri={window.location.origin}
      audience="http://localhost:3001/graphql"
      scope="read:current_user update:current_user_metadata"
    >
      <Page />
    </Auth0Provider>
  </Router>
);

ReactDOM.render(root, document.getElementById("root"));
