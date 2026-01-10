import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { searchBooks } from "../services/bookApi";

function Home() {

  const [books, setBooks] = useState([]);
    const handleSearch = async (query) => {
        const res = await searchBooks(query);
        console.log("hiii",res.data);
        // console.log("ebook_access",res.data.docs[1].ebook_access);
        setBooks(res.data.docs || []);

    };
    return (
        <>
        <div className="search-bar">
            <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="grid">
            
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
        </>
    );
}

export default Home;