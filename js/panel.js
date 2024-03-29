import React, {useState} from 'react';
import "../scss/panel.scss";
import { Button } from "./button";
import { Link } from  "react-router-dom";
import { MainSection } from "./main_section";

const Panel = (props) => {
    const [sectionType, setSectionType] = useState("MainPanel");
    const goToMainPanelEvent = () => {
        setSectionType( "MainPanel");
    }
    const goToWhiteListEvent = () => {
        setSectionType( "WhiteList");
    }
    const goToBlackListEvent = () => {
        setSectionType( "BlackList");
    }
    const goToStatisticsEvent = () => {
        setSectionType( "Statistics");
    }

    return <>
        <header>
            <div className="headerContainer">
                <div className="logoContainer">
                    <span className="logoIcon">
                        <svg width="45" height="45" viewBox="3 3 226 226" id="arrow_logoIcon" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="svg-path" className="view_path" d="M 9 21 L 9 202 C 9 210 18 226 38 215 L
                                146 125 C 150 121 153 110 146 101 L 40 12 C 33 4 12 3 9 21 Z"/>
                            </g>
                        </svg>
                         <svg width="45" height="45" viewBox="0 0 218 218" id="pause_logoIcon" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="svg-path" className="view_path" d="M 0 14 L 0 199 C 3 218 32 218 35 199 L 35
                                14 C 32 -4 4 -4 0 14 M 72 14 L 72 199 C 75 218 103 218 106 199 L 106 14 C 103 -5 75 -5 72 14 Z"/>
                            </g>
                        </svg>
                    </span>
                    <span className="logoText">Times <span className="orangeLogoText">Up</span></span>
                </div>
                <div className="nameAndTwoButtonsContainer">
                    <div className="userName"> {props.userName} </div>
                    <Button style={{color:"#F2C894", backgroundColor:"#F25C05", width:"138px", marginTop: "0"}} onClick={props.logOutEvent}> Wyloguj </Button>
                    <Button style={{width:"48px", marginTop: "0", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img alt="gear" src="../assets/gear-22.svg" style={{width:"33px", height:"33px"}} />
                    </Button>
                </div>
            </div>
        </header>
        <aside>
            <div className="buttonContainer">
                <Button onClick={goToMainPanelEvent}> Panel główny </Button>
                <Button onClick={goToWhiteListEvent}> White list </Button>
                <Button onClick={goToBlackListEvent}> Black list </Button>
                <Button onClick={goToStatisticsEvent}> Statystyki </Button>
                <Link to="/">Start</Link>
            </div>
        </aside>
        <main>
            < MainSection sectionType={ sectionType }/>
        </main>
    </>
}

export { Panel }