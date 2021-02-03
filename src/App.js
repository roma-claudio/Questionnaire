import React from "react";
import "./style.css";

import { useHistory } from 'react-router-dom';


function App (){
  let history = useHistory();
  let handleClick = () => {history.push('/question')};

  return (
    <div className="container-flex">
      <div className="row-flex h-100">
        <div className="column-flex-2">
          <h1>Questionnaire</h1>
          <p>Pre-made survey template</p>
          <button type="button" className="btn btn-dark" onClick={handleClick}>Start the survey</button>
        </div>
      </div>
    </div>
  );
}

export default App;