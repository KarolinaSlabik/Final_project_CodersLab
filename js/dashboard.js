import React, { useState, useEffect } from 'react';
import { some_domain_list } from "./some_domain_list";
import {DomainComponent} from "./domain_component";
import { PopUpForm } from "./pop_up_form"

import "../scss/dashboard.scss";
const Dashboard = () => {
    const memoDomainList = window.localStorage.getItem('domainList');

    const [domainList, setDomainList] = useState(JSON.parse(memoDomainList) || []);
    const [editingDomain, setEditingDomain] = useState({});
    const [showPopUpFormAdd, setShowPopUpFormAdd] = useState(false);
    const [showPopUpFormEdit, setShowPopUpFormEdit] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('domainList', JSON.stringify(domainList));
    }, [domainList])

    const deleteDomainEvent = (id) => {
        setDomainList(prevState => prevState.filter((element) => {
            return (element.id !== id);
        }));
    }
    const addDomainEvent = () => {
        setShowPopUpFormAdd(true);
    }
    const editDomainEvent = (domain, time, breakTime,id) => {
        setEditingDomain({url: domain, time: time, break: breakTime, id: id});
        setShowPopUpFormEdit(true);
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
        popUpForm = < PopUpForm onClose={closePopUpFormEvent} onDone={editingDomainTimeAndBreak} domainData={editingDomain} />;
    }

    return <>
        <div className="dashboard">
            <div className="domainList">
                { domainList.map((element) => {
                    return <DomainComponent domain={element.url} time={element.time} break={element.break} id={element.id} deleteClicked={deleteDomainEvent} editClicked={editDomainEvent} />
                })}
            </div>
            <img alt="plus icon" className="plusIcon" src="../assets/plus-icon.svg" onClick={addDomainEvent} />
        </div>
        { popUpForm }
    </>
}

export { Dashboard }