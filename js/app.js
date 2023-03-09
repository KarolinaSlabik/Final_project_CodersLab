import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { Browser } from './browser';
import { Panel } from './panel';
import { LoginForm } from './login_form';

import "../scss/style.scss"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Browser />} />
                {/*<Route path='panel' element={<Panel />} />*/}
                {/*<Route path='/' element={<Panel />} />*/}
                {/*<Route path='/' element={<LoginForm />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
