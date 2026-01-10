import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function Favourite() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        try{
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
        }catch(e){
            console.error("Failed to parse favorites from localStorage", e);
            setFavorites([]);
        }   
    },[]);
    //  const [favorites, setFavorites] = useState(() => {
    //     return JSON.parse(localStorage.getItem("favorites")) || [];
    // });
    return (
        <div>
            <h2>Favorites Books</h2>
            {favorites.length === 0 && <p>No favorite books added.</p>}
            
            <div className="grid">
                {favorites.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default Favourite;
