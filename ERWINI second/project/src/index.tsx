import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Erwini } from "./screens/Erwini";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Erwini />
  </StrictMode>,
);
