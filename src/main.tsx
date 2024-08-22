import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
