import "./App.css";
import Notification from "./scenes/Notification";

import ZoomOnScroll from "./test";

function App() {
  return (
    <main className="main">
      <Notification text="Usa F11 para una experiencia mejor!" />
      <ZoomOnScroll />
    </main>
  );
}

export default App;
