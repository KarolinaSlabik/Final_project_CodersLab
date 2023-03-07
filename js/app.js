import React from "react";
import { createRoot } from "react-dom/client";

import "../scss/style.scss"

const App = () => {
    return <div className="test">test</div>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
