import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import Page from "./Page";

const root = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.render(root, document.getElementById("root"));
