import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MovieView = () => {
    const {id} = useParams()

    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setMovieDetails(data)
                setIsLoading(false)
            }, 1000)
        })
    }, [id])

    function renderMovieDetails(){
        if (isLoading){
            return <Hero text="Loading..."/>
        } 
        if (movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
            const backdropUrl = `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`
            return (
                <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                <div className="container m-2">
                    <div className="row">
                        <div className="col-md-4">
                            {movieDetails.poster_path ? (
                                <img src={posterPath} alt={movieDetails.original_title} className="img-fluid mb-2"/>
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        <div className="col-md-8">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item">Ratings: {movieDetails.vote_average}/10</li>
                                <li className="list-group-item">Status: {movieDetails.status}</li>
                                <li className="list-group-item">Release Date: {movieDetails.release_date}</li>
                                <li className="list-group-item">Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }

    return renderMovieDetails()
  }

export default MovieView;