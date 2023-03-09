import React from 'react';
import "../scss/button.scss";
const Button = (props) => {

    return <>
        <div className="button" style={props.style} onClick={props.onClick}>{props.children}</div>
    </>
}

export { Button }
