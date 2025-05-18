import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Solutions } from "./screens/Solutions";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Solutions />
  </StrictMode>,
);
