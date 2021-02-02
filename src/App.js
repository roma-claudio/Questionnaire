import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container-flex">
      <div className="row-flex h-100">
        <div className="column-flex-2">
          <h1>Questionnaire</h1>
          <p>Pre-made survey template</p>
          <button type="button" className="btn btn-dark">Start the survey</button>
        </div>
      </div>
    </div>
  );
}
