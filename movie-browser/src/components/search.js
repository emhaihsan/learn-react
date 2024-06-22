import Hero from "./hero";
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    const posterUrl= `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
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
      {resultHtml && 
        <div className="row">
          {resultHtml}
        </div>
      }
      </>
    )
  }

  export default SearchView;