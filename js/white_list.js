import React, {useEffect, useState} from 'react';
import {WhiteListPopUpForm} from "./whiteList_pop_up_form";
import {DomainWhiteListComponent} from "./domain_whiteList_component";

const WhiteList = () => {
    const memoDomainWhiteList = window.localStorage.getItem('domainWhiteList');

    const [domainWhiteList, setDomainWhiteList] = useState(JSON.parse(memoDomainWhiteList) || []);
    const [editingDomainWhiteList, setEditingDomainWhiteList] = useState({});
    const [showWhiteListPopUpFormAdd, setShowWhiteListPopUpFormAdd] = useState(false);
    const [showWhiteListPopUpFormEdit, setShowWhiteListPopUpFormEdit] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('domainWhiteList', JSON.stringify(domainWhiteList));
    }, [domainWhiteList])

    const deleteDomainWhiteListEvent = (id) => {
        setDomainWhiteList(prevState => prevState.filter((element) => {
            return (element.id !== id);
        }));
    }
    const addDomainWhiteListEvent = () => {
        setShowWhiteListPopUpFormAdd(true);
    }
    const editDomainWhiteListEvent = (domain,id) => {
        setEditingDomainWhiteList({url: domain, id: id});
        setShowWhiteListPopUpFormEdit(true);
    }
    const closeWhiteListPopUpFormEvent = () => {
        setShowWhiteListPopUpFormAdd(false);
        setShowWhiteListPopUpFormEdit(false);
    }
    const addingDomainWhiteList = (domain) => {
        const id = new Date().getTime();
        setDomainWhiteList(prevState => [...prevState, {url: domain, id: id}])
        closeWhiteListPopUpFormEvent();
    }
    const editingDomainWhiteListEvent = (domain, id) => {
        setDomainWhiteList(prevState => {
            return prevState.map((element) => {
                if(element.id === id) {
                    return {url: domain};
                } else {
                    return element;
                }
            })
        })

        closeWhiteListPopUpFormEvent();
    }

    let whiteListPopUpForm = null;

    if (showWhiteListPopUpFormAdd) {
        whiteListPopUpForm = < WhiteListPopUpForm onClose={closeWhiteListPopUpFormEvent} onDone={addingDomainWhiteList} />;
    } else if (showWhiteListPopUpFormEdit) {
        whiteListPopUpForm = < WhiteListPopUpForm onClose={closeWhiteListPopUpFormEvent} onDone={editingDomainWhiteListEvent} whiteListDomainData={editingDomainWhiteList} />;
    }

    return <>
        <div className="dashboardWhiteList">
            <div className="domainWhiteList">
                { domainWhiteList.map((element) => {
                    return <DomainWhiteListComponent domain={element.url} id={element.id} deleteClicked={deleteDomainWhiteListEvent} editClicked={editDomainWhiteListEvent} />
                })}
            </div>
            <img alt="plus icon" className="plusBlackListIcon" src="../assets/plus-icon.svg" onClick={addDomainWhiteListEvent} />
        </div>
        { whiteListPopUpForm }
    </>
}

export { WhiteList }