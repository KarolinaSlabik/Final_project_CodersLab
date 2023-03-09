import React, { useState } from 'react';
import {LoginForm} from "./login_form";
import {Panel} from "./panel";

const AdminPanel = () => {
    const [logIn, setLogIn] = useState(false);
    const [userName, setUserName] = useState("");
    const logInEvent = (name) => {
        setLogIn(true);
        setUserName( name );
    }
    const logOutEvent = () => {
        setLogIn(false);
    }

    if(logIn === true) {
       return <Panel logOutEvent={logOutEvent} userName={ userName }/>;
    } else {
        return <LoginForm logInEvent={logInEvent} />;
    }
}

export { AdminPanel }