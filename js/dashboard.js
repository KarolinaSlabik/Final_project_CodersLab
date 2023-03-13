import React, { useState, useId } from 'react';
import { some_domain_list } from "./some_domain_list";
import {Button} from "./button";
import {DomainComponent} from "./domain_component";
import { PopUpForm } from "./pop_up_form"

import "../scss/dashboard.scss";
const Dashboard = (props) => {
    const [domainList, setDomainList] = useState(some_domain_list);
    const [showPopUpFormAdd, setShowPopUpFormAdd] = useState(false);
    const [showPopUpFormEdit, setShowPopUpFormEdit] = useState(false);

    const deleteDomainEvent = (event) => {
        console.log("odjęto domenę");
    }
    const addDomainEvent = () => {
        setShowPopUpFormAdd(true);
    }
    const closePopUpFormEvent = () => {
        setShowPopUpFormAdd(false);
        setShowPopUpFormEdit(false);
    }
    const addingDomainTimeAndBreak = (domain, time, breakTime) => {
        const id = new Date().getTime();
        setDomainList(prevState => [...prevState, {url: domain,time: time, break: breakTime, id: id}])
        closePopUpFormEvent();
    }
    const editingDomainTimeAndBreak = (domain, time, breakTime, id) => {
        setDomainList(prevState => {
            return prevState.map((element) => {
                if(element.id === id) {
                    return {url: domain,time: time, break: breakTime};
                } else {
                    return element;
                }
            })
        })

        closePopUpFormEvent();
    }

    let popUpForm = null;

    if (showPopUpFormAdd) {
        popUpForm = < PopUpForm onClose={closePopUpFormEvent} onDone={addingDomainTimeAndBreak} />;
    } else if (showPopUpFormEdit) {
        popUpForm = < PopUpForm onClose={closePopUpFormEvent} onDone={editingDomainTimeAndBreak} />;
    }

    return <>
        <div className="dashboard">
            <div className="domainList">
                { domainList.map((element) => {
                    return <DomainComponent domain={element.url} time={element.time} break={element.break} />
                })}
            </div>
            <img alt="plus icon" className="plusIcon" src="../assets/plus-icon.svg" onClick={addDomainEvent} />
        </div>
        { popUpForm }
    </>
}

export { Dashboard }