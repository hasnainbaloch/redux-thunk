import React from 'react';
import './Controller.css';


const Controller = (props) => {

    return (
        <div>
            <div className="btnContainer" >
                <button onClick={props.addOne}>
                    Add
                </button>
                <button onClick={props.subOne}>
                    Subtract
                </button>
                <button onClick={props.addTen}>
                    Add  10
                </button>
                <button onClick={props.subFifteen}>
                    Subtract  15
                </button>
                <hr/>
                <button onClick={props.result}>
                    Result
                </button>
            </div>
        </div>
    );
}

export default Controller;