import { Link } from "react-router-dom";

function BookCard({ book }) {
    // const info = book.volumeInfo;
    const info = book;
    // console.log("book in card",book?.title);
    console.log("info in card",info?.author_name);
    // console.log("title",info?.title);

    const addToFavorites = () => {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];

    //   const book = {
    //     ...book,
    //     id: book.id || book.volumeInfo?.title
    //   };
      const exists = stored.find((b) => b.id === book.id);
      if (!exists) {
        // stored.push(book);/
        localStorage.setItem("favorites", JSON.stringify([...stored, book]));
      }
    };
    return (
        <div className="book-card">
           <Link to={`/book/${book.id}`}>
            <h2>{info?.title}</h2>
            </Link>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
            <button onClick={addToFavorites}>Add to Favorites</button>
        </div>
    );
}

export default BookCard;