import {useState, useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'

import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=943caf1e';

// const movieOne = {
//     Title: "Batman Begins",
//     Year: "2005",
//     "imdbID": "tt0372784",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// };

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const serchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.warn('SEARCH MOVIES', data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        serchMovies('Batman')
    }, [])

    return (
        <div className="app">

            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
                <img 
                src={SearchIcon} 
                alt="search"
                onClick={() => serchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0
                ? (
                    <div className="container">
                        {movies.map(
                            (movie) => <MovieCard movie={movie} />
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;