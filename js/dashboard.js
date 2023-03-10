import React, { useState } from 'react';
import { some_domain_list } from "./some_domain_list";
import {Button} from "./button";
import {DomainComponent} from "./domain_component";

import "../scss/dashboard.scss";
const Dashboard = (props) => {
    const [domainList, setDomainList] = useState(some_domain_list);
    const deleteDomainEvent = (event) => {
        console.log("odjęto domenę");
    }
    const addDomainEvent = (event) => {
        console.log("dodano domenę");
    }
    return <>
        <div className="dashboard">
            <div className="domainList">
                <DomainComponent />
                <DomainComponent />
                <DomainComponent />
            </div>
            <img alt="plus icon" className="plusIcon" src="../assets/plus-icon.svg" onClick={addDomainEvent} />
        </div>
    </>
}

export { Dashboard }