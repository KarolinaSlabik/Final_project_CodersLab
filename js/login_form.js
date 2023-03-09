import React, { useState, useRef } from 'react';
import "../scss/login_form.scss";
import { LoginInput } from "./login_input";
import { Button } from "./button";
import { users } from "./users";

const LoginForm = (props) => {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const errorElement = useRef(null);

    const changelogInEvent = (event) => {
        setLoginValue(event.target.value);
    }
    const changePasswordEvent = (event) => {
        setPasswordValue(event.target.value);
    }

    const logInButtonClick = () => {
        let findPerson = false;
        let namePerson = "";
        users.forEach(user => {
            if(loginValue === user.login && user.password) {
                findPerson = true;
                namePerson = user.username;
            }
        });

        if (findPerson === true) {
            props.logInEvent(namePerson);
        } else {
            errorElement.current.innerText = "Nieprawidłowy login lub hasło!";
        }
    }

    return <>
        <main className="loginPanelBackground">
            <div className="loginBox">
                <form>
                    <LoginInput text="Login: " type="text" onChange={ changelogInEvent } />
                    <LoginInput text="Hasło: " type="password" onChange={ changePasswordEvent } />
                    <p className="errorText" ref={ errorElement }></p>
                    <Button style={{width: "138px", marginTop: 0, position: "relative", left: "143px"}} onClick ={logInButtonClick}> Zaloguj </Button>
                </form>
            </div>
        </main>
    </>
}

export { LoginForm }
