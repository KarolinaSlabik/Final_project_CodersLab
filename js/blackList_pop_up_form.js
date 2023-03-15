import React, { useState } from 'react';
import { LoginInput } from "./login_input";
import { Button } from "./button";

import "../scss/blackList_pop_up_form.scss";

const BlackListPopUpForm = (props) => {
    const [blackListDomain, setBlackListDomain] = useState(props.blackListDomainData?.url);

    const blackListSaveClick = () => {
        props.onDone(blackListDomain, props.blackListDomainData?.id);
    }
    const changeBlackListDomainEvent = (event) => {
        setBlackListDomain(event.target.value);
    }

    return <>
        <main className="blackList_pop_up-formBackground">
            <div className="blackList_pop_up-formBox">
                <form>
                    <LoginInput text="Domena: " type="text" onChange={changeBlackListDomainEvent} value={props.blackListDomainData?.url} />
                    <Button style={{width: "138px", marginTop: "30px", position: "relative", left: "143px"}} onClick={blackListSaveClick} > Zapisz </Button>
                    <Button style={{width: "48px", height: "48px", margin: "0 auto", position: "relative", top: "-224px", left: "266px"}} onClick={props.onClose}>
                        <img alt="close icon" src="../assets/Close-icon-pop_up_form.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                    </Button>
                </form>
            </div>
        </main>
    </>
}

export { BlackListPopUpForm }