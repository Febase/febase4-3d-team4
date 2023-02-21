import React from "react";
import ReactDOM from "react-dom/client";
import { ThreeCanvas } from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThreeCanvas />
  </React.StrictMode>
);
