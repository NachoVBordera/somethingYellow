import "./App.css";
import Notification from "./scenes/Notification";

import ZoomOnScroll from "./test";

function App() {
  return (
    <main
      style={{
        border: "1px solid white",
      }}
    >
      <Notification text="Usa F11 para una experiencia mejor!" />
      <ZoomOnScroll />
    </main>
  );
}

export default App;
