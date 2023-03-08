import React from 'react';
import "../scss/login_input.scss";
import { useId } from 'react';
const LoginInput = (props) => {
    const id = useId();
    return <>
        <div className="inputContainer">
            <label className="loginLabel" htmlFor={id}>{props.text}</label>
            <input className="loginInput" type={props.type} id={id}></input>
        </div>

    </>
}

export { LoginInput }