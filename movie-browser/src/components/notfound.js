import React from 'react';
import Hero from './hero';

const NotFound = () => {
  return (
    <>
      <Hero text="404 - Page Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              The page you are looking for does not exist. Please check the URL or go back to the home page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
