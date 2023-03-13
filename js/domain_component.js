import React from 'react';
import "../scss/domain_component.scss";
import { Button } from "./button"

const DomainComponent = (props) => {
    return <>
        <div className="domainComponent">
            <div className="domainTextBox">
                <p>Domena: <span>{props.domain}</span></p>
                <p>Czas: <span>{props.time}</span></p>
                <p>Przerwa: <span>{props.break}</span></p>
            </div>
            <div className="domainButtonBox">
                <Button style={{color:"#F2C894", backgroundColor:"#F25C05", width:"138px", marginTop: "0"}}> Edytuj </Button>
                <Button style={{width:"48px", marginTop: "0", display: "flex", justifyContent: "center", alignItems: "center"}} >
                    <img alt= "bin icon" className="binIcon" src="../assets/rubbish-bin-svgrepo-com.svg"  />
                </Button>
            </div>
        </div>
    </>
};

export { DomainComponent }