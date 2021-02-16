import React from 'react';

function Input() {
    return(
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
    );
}

export default Input;