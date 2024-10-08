import "./App.css";
import booksData from "../../../pruebas/01-reading-list/books.json";

function App() {
  const books = booksData.library;
  return (
    <main>
      <aside>
        <header>
          {" "}
          <h1>Editorial DOCET </h1>
          <h2>Libros disponibles</h2>
        </header>
        <ul className="books">
          {books.map((item, index) => {
            const book = item.book; // Get the 'book' object
            return (
              <p className="book" key={index}>
                <img src={book.cover} alt={book.title} />
              </p>
            );
          })}
        </ul>
      </aside>
      <section>
        <h2>Lista de lectura</h2>
      </section>
    </main>
  );
}

export default App;
