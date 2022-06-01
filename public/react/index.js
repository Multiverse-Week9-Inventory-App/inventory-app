import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "regenerator-runtime/runtime";

import { App } from "./components/App";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById("root")
);
