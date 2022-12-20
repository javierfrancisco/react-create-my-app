import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="bird" breed="Cocktiel"></Pet>
      <Pet name="Doink" animal="cat" breed="Mixed"></Pet>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
