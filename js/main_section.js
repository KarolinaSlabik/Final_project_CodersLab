import React from 'react';
import {Dashboard} from "./dashboard";
import {WhiteList} from "./white_list";
import {BlackList} from "./black_list";
import {Statistics} from "./statistics";

const MainSection = (props) => {
    if(props.sectionType === "MainPanel") {
        return <>
            <Dashboard />
        </>
    } else if(props.sectionType === "WhiteList") {
        return <>
            <WhiteList />
        </>
    } else if(props.sectionType === "BlackList") {
        return <>
            <BlackList />
        </>
    } else if(props.sectionType === "Statistics") {
        return <>
            <Statistics />
        </>
    }
}

export { MainSection }