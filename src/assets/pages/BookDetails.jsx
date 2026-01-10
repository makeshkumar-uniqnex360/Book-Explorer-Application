import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
      axios 
        .get(`https>//openlibrary.org/search.json?title=${id}`)
        .then((res)=> setBook(res.data));
    }, [id]);

    if (!book) return <p>Loading...</p>;

    const info = book.volumeInfo;

    return (
        <div className="book-details">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />
            <h1>{info.title}</h1>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
            <p>{info.description || "No description available."}</p>
        </div>
    );
}
export default BookDetails;