import react from 'react';
import "./style.css";

function Congrats() {
    return(
        <div className="container-flex">
            <div className="row-flex h-100">
                <div className="column-flex-2 center">
                    <h1>Congratulations!</h1>
                    <p>You completed the questionnaire, we'll get back to you shortly</p>
                </div>
            </div>
        </div>
    );
}

export default Congrats;