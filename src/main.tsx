import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error(
    "No root element found. Make sure the element with ID 'root' exists in your HTML."
  );
}
