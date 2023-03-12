import React, { useState } from 'react';
import { LoginInput } from "./login_input";
import { Button } from "./button";

import "../scss/pop_up_form.scss";
import {Link} from "react-router-dom";

const PopUpForm = () => {

    return <>
        <main className="pop_up-formBackground">
            <div className="pop_up-formBox">
                <form>
                    <LoginInput text="Domena: " type="text"  />
                    <LoginInput text="Czas: " type="text"  />
                    <LoginInput text="Przerwa: " type="text"  />
                    <Button style={{width: "138px", marginTop: "30px", position: "relative", left: "143px"}} > Zapisz </Button>
                    <Button style={{width: "48px", height: "48px", margin: "0 auto", position: "relative", top: "-430px", left: "260px"}}>
                        <img alt="close icon" src="../assets/Close-icon-pop_up_form.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                    </Button>
                </form>
            </div>
        </main>
    </>
}

export { PopUpForm }