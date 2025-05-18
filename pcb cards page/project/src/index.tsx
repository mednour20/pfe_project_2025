import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PcbCards } from "./screens/PcbCards";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PcbCards />
  </StrictMode>,
);
