import React, { useState } from 'react';
import {LoginForm} from "./login_form";
import {Panel} from "./panel";

const AdminPanel = () => {
    let memoUserName = "";
    let memoUserLogIn = false;
    const memoUser = window.localStorage.getItem('user');
    if (memoUser !== null && memoUser !== undefined) {
        memoUserLogIn = true;
        memoUserName = memoUser;
    }

    const [logIn, setLogIn] = useState( memoUserLogIn );
    const [userName, setUserName] = useState( memoUserName );
    const logInEvent = (name) => {
        setLogIn(true);
        setUserName( name );
        window.localStorage.setItem('user', name);
    }
    const logOutEvent = () => {
        setLogIn(false);
        setUserName("");
        window.localStorage.removeItem('user');
    }

    if(logIn === true) {
       return <Panel logOutEvent={logOutEvent} userName={ userName }/>;
    } else {
        return <LoginForm logInEvent={logInEvent} />;
    }
}

export { AdminPanel }