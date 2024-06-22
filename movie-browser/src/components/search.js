import Hero from "./hero";
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    const noImage = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=';
    const posterUrl= movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noImage
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-2 col-md-3 col-2">
        <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title}></img>
        <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
        </div>
        </div>
    )
}

const SearchView = ({keyword, searchResults}) =>{
    const title = `You are searching for ${keyword}`;
    const resultHtml = searchResults.map((obj, i)=>{
      return <MovieCard key={i} movie={obj}/>
    })
    return (
      <>
      <Hero text={title}/>
      {resultHtml.length > 0 ? (
        <div className="row">
          {resultHtml}
        </div>):(
        <div className="container">
          <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              No results found.
            </p>
          </div>
        </div>
        </div>

        )
      }
      </>
    )
  }

  export default SearchView;