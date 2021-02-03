import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import App from "./App";
import Congrats from "./Congrats";
import Question from "./Question";

ReactDOM.render(
    <Router>
        <Route exact path="/question">
            <Question type="textArea"/>   
        </Route>
        <Route exact path="/congrats">
            <Congrats/>   
        </Route>
        <Route exact path="/">
            <App />   
        </Route>
    </Router>
    ,
    document.getElementById("root")
);
