import React, { useState } from 'react';
import { LoginInput } from "./login_input";
import { Button } from "./button";

import "../scss/whiteList_pop_up_form.scss";

const WhiteListPopUpForm = (props) => {
    const [whiteListDomain, setWhiteListDomain] = useState(props.whiteListDomainData?.url);

    const whiteListSaveClick = () => {
        props.onDone(whiteListDomain, props.whiteListDomainData?.id);
    }
    const changeWhiteListDomainEvent = (event) => {
        setWhiteListDomain(event.target.value);
    }

    return <>
        <main className="whiteList_pop_up-formBackground">
            <div className="whiteList_pop_up-formBox">
                <form>
                    <LoginInput text="Domena: " type="text" onChange={changeWhiteListDomainEvent} value={props.whiteListDomainData?.url} />
                    <Button style={{width: "138px", marginTop: "30px", position: "relative", left: "143px"}} onClick={whiteListSaveClick} > Zapisz </Button>
                    <Button style={{width: "48px", height: "48px", margin: "0 auto", position: "relative", top: "-224px", left: "266px"}} onClick={props.onClose}>
                        <img alt="close icon" src="../assets/Close-icon-pop_up_form.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                    </Button>
                </form>
            </div>
        </main>
    </>
}

export { WhiteListPopUpForm }