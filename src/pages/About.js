import React from 'react'
import friedrice from '../images/friedrice.jpg';

function About() {
  return (
    <div className="container my-5 contact">
      <div className="row my-5">
        <div className="col-md-6 my-5 px-3">
          <h1 className="p5 orange">About Us</h1>
          <p className="my-5 text-muted">At DogsHaven, we care for and admire dogs. On this platform, you can search for different breeds of dogs around the world. You can also find basic information about each breed of dog like, name, life span, purpose for breeding.</p>

          <p className="text-muted">
            This web app was built using React (react-hooks, react-router, styled-components). It is mobile responsive and fast.
          </p>
        </div>
        <div className="col-md-6">
          <img className="custom-img-about" src={friedrice} alt={friedrice}/>
        </div>
      </div>
    </div>
  )
}

export default About
