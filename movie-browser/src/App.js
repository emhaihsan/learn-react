import './App.css';
import { useState,  useEffect} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutView from './components/about';
import SearchView from './components/search';
import MovieView from './components/movie'
import {Routes, Route} from 'react-router-dom';

const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

function App() {
  const[searchResults, setSearchResults] = useState([]);
  const[searchText, setSearchText] = useState('');

    
  useEffect(() => {
    if(searchText){
      console.log(searchText,"is the search text")
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`).then(response => response.json()).then(data => {
        setSearchResults(data.results)
      })
    }
  },[searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>

      <Routes>
      <Route path="/" Component={Home}>
      </Route>
      <Route path="/about" Component={AboutView}>
      </Route>
      <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} >
      </Route>
      <Route path="/movies/:id" element={<MovieView/>} >
      </Route>
      </Routes>
    </div>
  );
}

export default App;
