import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import App from "./App";
import Congrats from "./Congrats";
import Question from "./Question";
import Recap from "./Recap";

ReactDOM.render(
    <Router>
        <Route exact path="/question1">
            <Question type="textArea"/>   
        </Route>
        <Route exact path="/question2">
            <Question type="select"/>   
        </Route>
        <Route exact path="/question3">
            <Question type="input"/>   
        </Route>
        <Route exact path="/question4">
            <Question type="checkBox"/>   
        </Route>
        <Route exact path="/recap">
            <Recap/>   
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
