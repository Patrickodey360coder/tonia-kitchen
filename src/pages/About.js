import React from 'react'
import friedrice from '../images/friedrice.jpg';

function About() {
  return (
    <div className="container my-5 contact">
      <div className="row my-5">
        <div className="col-md-6 my-5 px-3">
          <h1 className="p5 orange">About Us</h1>
          <p className="my-5 text-muted">At Tonia's Kitchen, we cater for your stomach needs. On this platform, you can search for different delicacies of your choice. You can also see the price based on the quantity you want. Reach out to us on the contact page if you have any further information.</p>

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
