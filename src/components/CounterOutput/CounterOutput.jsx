import React from 'react';
import './Output.css';

const Output = (props) => {

    return (
        <div className="box">
            <p>OUTPUT</p>
            {props.output}
        </div>
    );
}

export default Output;