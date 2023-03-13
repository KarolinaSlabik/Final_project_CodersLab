import React, { useState } from 'react';
import { LoginInput } from "./login_input";
import { Button } from "./button";

import "../scss/pop_up_form.scss";

const PopUpForm = (props) => {
    const [domain, setDomain] = useState("");
    const [time, setTime] = useState("");
    const [breakTime, setBreakTime] = useState("");
    const saveClick = () => {
        props.onDone(domain, time, breakTime);
    }
    const changeDomainEvent = (event) => {
        setDomain(event.target.value);
    }
    const changeTimeEvent = (event) => {
        setTime(event.target.value);
    }
    const changeBreakTimeEvent = (event) => {
        setBreakTime(event.target.value);
    }
    return <>
        <main className="pop_up-formBackground">
            <div className="pop_up-formBox">
                <form>
                    <LoginInput text="Domena: " type="text" onChange={changeDomainEvent} />
                    <LoginInput text="Czas: " type="text"  onChange={changeTimeEvent} />
                    <LoginInput text="Przerwa: " type="text" onChange={changeBreakTimeEvent}  />
                    <Button style={{width: "138px", marginTop: "30px", position: "relative", left: "143px"}} onClick={saveClick} > Zapisz </Button>
                    <Button style={{width: "48px", height: "48px", margin: "0 auto", position: "relative", top: "-430px", left: "260px"}} onClick={props.onClose}>
                        <img alt="close icon" src="../assets/Close-icon-pop_up_form.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                    </Button>
                </form>
            </div>
        </main>
    </>
}

export { PopUpForm }