import React, { useState } from 'react';
import { LoginInput } from "./login_input";
import { Button } from "./button";

import "../scss/pop_up_form.scss";

const PopUpForm = (props) => {
    const [domain, setDomain] = useState(props.domainData?.url);
    const [time, setTime] = useState(props.domainData?.time);
    const [breakTime, setBreakTime] = useState(props.domainData?.break);
    const saveClick = () => {
        props.onDone(domain, time, breakTime, props.domainData?.id);
    }
    const changeDomainEvent = (event) => {
        setDomain(event.target.value);
    }
    const changeTimeEvent = (event) => {
        if(typeof(event.target.value) === "string") {
            setTime(parseInt(event.target.value));
        } else {
            setTime(event.target.value);
        }
    }
    const changeBreakTimeEvent = (event) => {
        if(typeof(event.target.value) === "string") {
            setBreakTime(parseInt(event.target.value));
        } else {
            setBreakTime(event.target.value);
        }
    }

    return <>
        <main className="pop_up-formBackground">
            <div className="pop_up-formBox">
                <form>
                    <LoginInput text="Domena: " type="text" onChange={changeDomainEvent} value={props.domainData?.url} />
                    <LoginInput text="Czas: " type="text"  onChange={changeTimeEvent} value={props.domainData?.time}/>
                    <LoginInput text="Przerwa: " type="text" onChange={changeBreakTimeEvent} value={props.domainData?.break} />
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