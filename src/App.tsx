import "./App.css";
import Notification from "./scenes/Notification";

import ComicScenes from "./comic";

function App() {
  return (
    <main
      style={{
        border: "1px solid white",
      }}
    >
      <Notification text="Usa F11 para una experiencia mejor!" />
      <ComicScenes />
    </main>
  );
}

export default App;
