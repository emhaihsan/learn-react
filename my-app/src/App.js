import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

class FilmIterRow extends React.Component {
  render(){
    return (
      <li><a href={this.props.url}>{this.props.url}</a></li>
    )
  }
}
class StarWars extends React.Component {
  constructor(){
    super()
    this.state = {
      loadCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    const url =  `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        films: data.films,
        loadCharacter: true
      })
    })
  }
  render() {
    const movies = this.state.films.map((url, index) => {
      return <FilmIterRow key={index} url={url}/>
    })
    return (
      <div>
        {
          this.state.loadCharacter && 
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p><a href={this.state.homeworld}>Homeworld: </a></p>
            <ul>
              {movies}
            </ul>
          </div>
        }
        
        <button type='button' onClick={() => this.getNewCharacter()} className='btn'>Randomized character</button>
      </div>


    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
