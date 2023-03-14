import React from 'react';
import { Button } from "./button";

import "../scss/pop_up_end.scss";

const PopUpEnd = (props) => {

    return <>
        <main className="pop_up-endBackground">
            <div className="pop_up-endBox">
                <Button style={{width: "48px", height: "48px", margin: "0 auto", backgroundColor: "#F25C05", position: "absolute", top: "295px", left: "1203px"}} onClick={props.onClose}>
                    <img alt="close icon" src="../assets/Close-icon-9iuh.svg" style={{width:"33px", height:"33px", marginTop:"7px",fill:"#F2CB05"}} />
                </Button>
                <div className="pop_up-endText">Koniec czasu!</div>
            </div>
        </main>
    </>
}

export { PopUpEnd }