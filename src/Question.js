import React from 'react';
import "./style.css";

function Question() {
    return(
        <div className="container-flex h-100">
            <div className="center">
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
                                <h5>This is the answer field</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-flex mt-5">
                    <div className="column-flex-2 mx-auto">
                        <button type="button" className="btn btn-dark mr-5 disabled">Previous</button>
                        <button type="button" className="btn btn-dark">Next</button>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Question;