import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';


class AffiliationsIterRow extends React.Component {
  render(){
    return (
      <li>{this.props.url}</li>
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
      image: null,
      wiki: null,
      affiliations: [],
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
        affiliations: data.affiliations,
        image: data.image,
        wiki: data.wiki,
        loadCharacter: true
      })
    })
  }
  render() {
    const affiliations = this.state.affiliations.map((url, index) => {
      return <AffiliationsIterRow key={index} url={url}/>
    })
    return (
      <div>
        {
          this.state.loadCharacter && 
          <div>
            <img src={this.state.image} height={200} alt={this.state.name}/>
            <h1><a href={this.state.wiki}>{this.state.name}</a></h1>
            <p>Height:<br></br>{this.state.height} m</p>
            <p>Homeworld:<br></br>{this.state.homeworld}</p>
            <ul>
            Affiliations:{affiliations}
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
      <video autoPlay loop className="background-video">
          <source src="/darth-vader.mp4" type="video/mp4"/>
        </video>
      <header className="App-header">
        <audio autoPlay loop>
          <source src='star-wars-theme.mp3' type='audio/mpeg'/>
        </audio>
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
