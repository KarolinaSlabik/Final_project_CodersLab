import React from 'react';
import "../scss/domain_whiteList_component.scss";
import { Button } from "./button"

const DomainWhiteListComponent = (props) => {
    const editClickWhiteListEvent = () => {
        props.editClicked(props.domain, props.id);
    }
    const deleteClickWhiteListEvent = () => {
        props.deleteClicked(props.id);
    }
    return <>
        <div className="domainWhiteListComponent">
            <div className="domainWhiteListTextBox">
                <p>Domena: <span>{props.domain}</span></p>
            </div>
            <div className="domainWhiteListButtonBox">
                <Button style={{color:"#F2C894", backgroundColor:"#F25C05", width:"138px", marginTop: "0"}} onClick={editClickWhiteListEvent}> Edytuj </Button>
                <Button style={{width:"48px", marginTop: "0", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={deleteClickWhiteListEvent} >
                    <img alt= "bin icon" className="binWhiteListIcon" src="../assets/rubbish-bin-svgrepo-com.svg"  />
                </Button>
            </div>
        </div>
    </>
};

export { DomainWhiteListComponent }