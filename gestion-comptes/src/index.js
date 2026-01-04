import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import MainApp from "./App";
import trackPerformance from "./reportWebVitals";

const container = document.querySelector("#root");
const appRoot = createRoot(container);

appRoot.render(
    <StrictMode>
        <MainApp />
    </StrictMode>
);

// Mesure optionnelle des performances
trackPerformance();
