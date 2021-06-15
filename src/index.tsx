import { createBrowserHistory } from "history";
import React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { App } from "./app";
import { StoresProvider } from "./stores";

const history = createBrowserHistory();

ReactDOM.render(
  <StoresProvider>
    <Router history={history}>
      <App />
    </Router>
  </StoresProvider>,
  document.getElementById("root")
);

