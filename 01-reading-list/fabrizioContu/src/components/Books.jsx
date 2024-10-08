import booksData from "../../../../pruebas/01-reading-list/books.json";
export const Books = () => {
  const books = booksData.library;
  return (
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
  );
};
