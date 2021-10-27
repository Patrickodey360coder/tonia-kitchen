import React from 'react'
import bg2 from '../images/bg2.jpg';

function About() {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p>loremzz</p>
        </div>
        <div className="col-md-6">
          <img class="custom-img-about" src={bg2} alt={bg2}/>
        </div>
      </div>
    </div>
  )
}

export default About
