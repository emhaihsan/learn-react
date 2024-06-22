import Hero from "./hero";

const Home = () =>{
    return (
      <>
      <Hero text="Welcome to Movie Browser"/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              It uses utility classes for typography and spacing to space content out within the larger container.  
              </p>
            </div>
          </div>
      </div>
      </>
    )
  }

  export default Home;