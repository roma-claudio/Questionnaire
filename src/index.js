import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import App from "./App";
import Question from "./Question";

ReactDOM.render(
    <Router>
        <Route exact path="/question">
            <Question />   
        </Route>
        <Route exact path="/">
            <App />   
        </Route>
    </Router>
    ,
    document.getElementById("root")
);
