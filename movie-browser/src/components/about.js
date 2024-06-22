import Hero from "./hero";
const AboutView = () => {
    return (
      <>
              <Hero text={"About Us"}/>
              <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This is about movie browser. we are a movie browser.   
              </p>
            </div>
          </div>
      </div>
      </>
    )
  }

export default AboutView;