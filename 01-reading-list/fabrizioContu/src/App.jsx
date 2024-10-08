import "./App.css";
import { Books } from "./components/Books";

function App() {
  return (
    <main>
      <aside>
        <header>
          {" "}
          <h1>Editorial DOCET </h1>
          <h2>Libros disponibles</h2>
        </header>
        <Books />
      </aside>
      <section>
        <h2>Lista de lectura</h2>
      </section>
    </main>
  );
}

export default App;
