import react from 'react';
import { useHistory } from 'react-router-dom';

function Recap() {

    let history = useHistory();
    let handleClick = () => {
        history.push('/congrats');
    }

    let handleIconClick = (value) => {
        value.target.innerHTML = value.target.innerHTML === "+" ? "-" : "+";
        value.target.parentNode.childNodes[2].classList.contains('show') ? value.target.parentNode.childNodes[2].classList.remove('show') : value.target.parentNode.childNodes[2].classList.add('show');
    }

    return(
        <div className="container-flex h-100">
            <div className="center-flex">
                <div className="row-flex mb-5">
                    <div className="column-flex-2 mx-auto">
                        <h5>Recap</h5>
                    </div>
                </div>
                <div className="row-flex">
                    <div className="column-flex-2 mx-auto">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Question1<button type="button" className="btn p-0 btn-sm float-right" onClick={handleIconClick}>+</button>
                                    <div className="collapse">
                                        <div className="card card-body p-0 pt-4 border-0">
                                        <h6>Question</h6>
                                        </div>
                                        <div className="card card-body p-0 pt-4 border-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">Question2<button type="button" className="btn p-0 btn-sm float-right" onClick={handleIconClick}>+</button>
                                    <div className="collapse">
                                        <div className="card card-body p-0 pt-4 border-0">
                                            <h6>Question</h6>
                                        </div>
                                        <div className="card card-body p-0 pt-4 border-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">Question3<button type="button" className="btn p-0 btn-sm float-right" onClick={handleIconClick}>+</button>
                                    <div className="collapse">
                                        <div className="card card-body p-0 pt-4 border-0">
                                            <h6>Question</h6>
                                        </div>
                                        <div className="card card-body p-0 pt-4 border-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-flex mt-5">
                    <div className="column-flex-2 mx-auto">
                        <button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Submit</button>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Recap;