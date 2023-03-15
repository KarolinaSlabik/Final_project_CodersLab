import React from 'react';
import { Button } from "./button";

import "../scss/pop_up_blackList.scss";

const PopUpBlackList = (props) => {

    return <>
        <main className="pop_up-blackListBackground">
            <div className="pop_up-blackListBox">
                <Button style={{width: "48px", height: "48px", margin: "0 auto", backgroundColor: "#F25C05", position: "absolute", top: "295px", left: "1203px"}} onClick={props.onClose}>
                    <img alt="close icon" src="../assets/Close-icon-9iuh.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                </Button>
                <div className="pop_up-blackListText">Zakaz wstępu!</div>
            </div>
        </main>
    </>
}

export { PopUpBlackList }