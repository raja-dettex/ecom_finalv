import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterProvider } from "./Filter-context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </StrictMode>
);
