import Hero from "./hero";
import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                setPopularMovies(data.results.slice(0, 6)); // Get top 6 popular movies
            })
    }, []);

    return (
        <>
            <Hero text="Welcome to Movie Browser" backdrop="https://image.tmdb.org/t/p/w1280/your-backdrop-image.jpg" />
            <div className="container my-5">
                <h2 className="mb-4">Popular Movies</h2>
                <div className="row">
                    {popularMovies.map((movie) => (
                        <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                                    <a href={`/movies/${movie.id}`} className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
