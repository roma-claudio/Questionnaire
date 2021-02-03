import React from 'react';
import "./style.css";

import Select from './Select';
import Input from './Input';
import TextArea from './TextArea';
import CheckBox from './Checkbox';
import { useHistory } from 'react-router-dom';

function Question(props) {

    let history = useHistory();
    let handleClick = () => {
        history.push('/congrats');
    }

    let answer;
    switch(props.type) {
        case "textArea":
            answer = <div><TextArea/></div>;
            break;
        case "select":
            answer = <div><Select/></div>;
            break;
        case "input":
            answer = <div><Input/></div>;
            break;
        case "checkBox":
            answer = <div><CheckBox/></div>;
            break;
        default:
            question = <div>Invalid answer type</div>;

    }
    
    return(
        <div className="container-flex h-100">
            <div className="center-flex">
                <div className="row-flex mb-5">
                    <div className="column-flex-2 mx-auto">
                        <h5>Question 1 of 5</h5>
                    </div>
                </div>
                <div className="row-flex">
                    <div className="column-flex-4">
                        <div className="row-flex">
                            <div className="column-flex-2 mx-auto">
                                <h2>This is a question</h2>
                            </div>
                        </div>
                        <div className="row-flex">
                            <div className="column-flex-2 mx-auto">
                                <h5>{answer}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-flex mt-5">
                    <div className="column-flex-2 mx-auto">
                        <button type="button" className="btn btn-dark mr-5 disabled">Previous</button>
                        <button type="button" className="btn btn-dark" onClick={handleClick}>Next</button>
                    </div>
                </div> 
            </div>
        </div>
    );

}

export default Question;