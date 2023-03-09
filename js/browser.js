import React from 'react';
import "../scss/browser.scss";
import { Link } from  "react-router-dom";
const Browser = () => {

    return <>
        <header>
            <div className="headerBrowserContainer">
                <div className="arrowAndLoadIconContainer">
                    <div className="arrowBox">
                        <svg width="45" height="45" viewBox="3 3 226 226" id="arrow_leftIcon" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="svg-path" className="view_path" d="M 9 21 L 9 202 C 9 210 18 226 38 215 L
                                146 125 C 150 121 153 110 146 101 L 40 12 C 33 4 12 3 9 21 Z"/>
                            </g>
                        </svg>
                        <svg width="45" height="45" viewBox="3 0 226 219" id="arrow_rightIcon" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="svg-path" className="view_path" d="M 9 21 L 9 202 C 9 210 18 226 38 215 L
                                146 125 C 150 121 153 110 146 101 L 40 12 C 33 4 12 3 9 21 Z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="reloadIconBox">
                        <svg width="45" height="45" viewBox="-16 -16 320 320" id="reloadIcon" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="svg-path" className="view_path" d="M 16 107 L 78 107 C 89 108 96 93 88 85 L
                                70 67 C 101 28 181 22 223 66 C 271 109 257 197 225 219 C 195 250 139 268 79 230 C 75
                                229 66 229 60 238 C 54 245 56 252 60 258 C 118 306 201 288 235 258 C 320 191 300 75
                                233 27 C 213 8 122 -32 45 41 L 24 21 C 19 16 6 17 3 28 L 3 96 C 4 102 9 107 16 107 Z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <input className="browserInput" />
                <Link to="/panel">
                    <img alt="close icon" src="../assets/Close-icon-9iuh.svg" style={{width:"33px", height:"33px"}} />
                </Link>
            </div>
        </header>
        <section className="mainBrowserSection">
            <embed src=""  className="realBrowser"></embed>
        </section>
    </>
}

export { Browser }
