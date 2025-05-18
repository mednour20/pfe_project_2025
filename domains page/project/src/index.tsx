import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Domains } from "./screens/Domains";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Domains />
  </StrictMode>,
);
