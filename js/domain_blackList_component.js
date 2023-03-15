import React from 'react';
import "../scss/domain_blackList_component.scss";
import { Button } from "./button"

const DomainBlackListComponent = (props) => {
    const editClickBlackListEvent = () => {
        props.editClicked(props.domain, props.id);
    }
    const deleteClickBlackListEvent = () => {
        props.deleteClicked(props.id);
    }
    return <>
        <div className="domainBlackListComponent">
            <div className="domainBlackListTextBox">
                <p>Domena: <span>{props.domain}</span></p>
            </div>
            <div className="domainBlackListButtonBox">
                <Button style={{color:"#F2C894", backgroundColor:"#F25C05", width:"138px", marginTop: "0"}} onClick={editClickBlackListEvent}> Edytuj </Button>
                <Button style={{width:"48px", marginTop: "0", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={deleteClickBlackListEvent} >
                    <img alt= "bin icon" className="binBlackListIcon" src="../assets/rubbish-bin-svgrepo-com.svg"  />
                </Button>
            </div>
        </div>
    </>
};

export { DomainBlackListComponent }