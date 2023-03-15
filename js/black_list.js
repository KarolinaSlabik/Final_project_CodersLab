import React, { useState, useEffect } from 'react';
import {BlackListPopUpForm} from "./blackList_pop_up_form";
import {DomainBlackListComponent} from "./domain_blackList_component";

const BlackList = () => {
    const memoDomainBlackList = window.localStorage.getItem('domainBlackList');

    const [domainBlackList, setDomainBlackList] = useState(JSON.parse(memoDomainBlackList) || []);
    const [editingDomainBlackList, setEditingDomainBlackList] = useState({});
    const [showBlackListPopUpFormAdd, setShowBlackListPopUpFormAdd] = useState(false);
    const [showBlackListPopUpFormEdit, setShowBlackListPopUpFormEdit] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('domainBlackList', JSON.stringify(domainBlackList));
    }, [domainBlackList])

    const deleteDomainBlackListEvent = (id) => {
        setDomainBlackList(prevState => prevState.filter((element) => {
            return (element.id !== id);
        }));
    }
    const addDomainBlackListEvent = () => {
        setShowBlackListPopUpFormAdd(true);
    }
    const editDomainBlackListEvent = (domain,id) => {
        setEditingDomainBlackList({url: domain, id: id});
        setShowBlackListPopUpFormEdit(true);
    }
    const closeBlackListPopUpFormEvent = () => {
        setShowBlackListPopUpFormAdd(false);
        setShowBlackListPopUpFormEdit(false);
    }
    const addingDomainBlackList = (domain) => {
        const id = new Date().getTime();
        setDomainBlackList(prevState => [...prevState, {url: domain, id: id}])
        closeBlackListPopUpFormEvent();
    }
    const editingDomainBlackListEvent = (domain, id) => {
        setDomainBlackList(prevState => {
            return prevState.map((element) => {
                if(element.id === id) {
                    return {url: domain};
                } else {
                    return element;
                }
            })
        })

        closeBlackListPopUpFormEvent();
    }

    let blackListPopUpForm = null;

    if (showBlackListPopUpFormAdd) {
        blackListPopUpForm = < BlackListPopUpForm onClose={closeBlackListPopUpFormEvent} onDone={addingDomainBlackList} />;
    } else if (showBlackListPopUpFormEdit) {
        blackListPopUpForm = < BlackListPopUpForm onClose={closeBlackListPopUpFormEvent} onDone={editingDomainBlackListEvent} blackListDomainData={editingDomainBlackList} />;
    }

    return <>
        <div className="dashboardBlackList">
            <div className="domainBlackList">
                { domainBlackList.map((element) => {
                    return <DomainBlackListComponent domain={element.url} id={element.id} deleteClicked={deleteDomainBlackListEvent} editClicked={editDomainBlackListEvent} />
                })}
            </div>
            <img alt="plus icon" className="plusBlackListIcon" src="../assets/plus-icon.svg" onClick={addDomainBlackListEvent} />
        </div>
        { blackListPopUpForm }
    </>
}

export { BlackList }