import React, {useState} from "react";
import MovieCard from './MovieCard';

function SearchMovies (){

    const [query, setQuery] = useState('');
    const [movies, setMovies]= useState([]);

    const searchMovies = async(e) => {

        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=df795042d40e447835ee0b2f5fcbf45e&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(movies);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label"  htmlFor="query" >Movie Name</label>
                <input 
                    className="input" type="text" placeholder="Search for a movie..." value={query} onChange={(e) => setQuery(e.target.value)} 
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => 
                    <MovieCard movie={movie} key="movie.id"/>
                )}
            </div>
        </>
    )
}

export default SearchMovies;