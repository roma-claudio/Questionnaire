import react, { Fragment } from 'react';

function CheckBox() {
    return(
        <Fragment>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Default radio
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Default radio
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Default radio
                </label>
            </div>
        </Fragment>
    );
}

export default CheckBox;