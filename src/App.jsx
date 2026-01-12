import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
// import { useEffect } from 'react';
// import axios from 'axios';
import BookDetails from './assets/pages/BookDetails';
import Favourite from './assets/pages/Favourite';


function App() {
// useEffect(() => {
//   axios
//   .get('https://openlibrary.org/search.json?q=harry+potter')
//   .then((res) => console.log(res.data));
// }, []);

  return (
      <div className="card"> 
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favourite />} />  
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
