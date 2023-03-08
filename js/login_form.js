import React from 'react';
import "../scss/login_form.scss";
import { LoginInput } from "./login_input";
import {Button} from "./button";

const LoginForm = (props) => {

    return <>
        <main className="loginPanelBackground">
            <div className="loginBox">
                <form>
                    <LoginInput text="Login: " type="text" />
                    <LoginInput text="Hasło: " type="password" />
                    <p className="errorText">Nieprawidłowy login lub hasło!</p>
                    <Button style={{width: "138px", marginTop: 0, position: "relative", left: "135px"}}> Zaloguj </Button>
                </form>
            </div>
        </main>
    </>
}

export { LoginForm }
