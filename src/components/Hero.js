import React from 'react'
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Dog from './Dog';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';



function Hero() {
  const [dogs, setDogs] = useState([]);

  useEffect(()=> {
    let api = "https://api.thedogapi.com/v1/breeds?limit=12&page=100?api_key=2c1958d5-790f-4725-87cc-7e59767ba77f"
    fetch(api)
      .then( res => res.json())
      .then( result => setDogs(result))
  },[]
  );

  return (
    <HeroSection>
      <HeroWrapper>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              {/* <svg className="bd-placeholder-img" width="100%" height="400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
              <img className="custom-img" src={bg1} width="100%" height="100%" alt="bg1"/>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><Link className="btn btn-lg btn-primary" to="#">Sign up today</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              {/* <svg className="bd-placeholder-img" width="100%" height="400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
              <img className="custom-img" src={bg2} width="100%" height="100%" alt="bg2"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><Link className="btn btn-lg btn-primary" to="#">Learn more</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <svg className="bd-placeholder-img" width="100%" height="400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
              <img className="custom-img" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="100%" height="70%" alt="bg3"/>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><Link className="btn btn-lg btn-primary" to="#">Browse gallery</Link></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="album py-5 bg-light">
          <div className="container">
            <h1 className="text-center mb-5">Dogs Haven</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg -4 g-3">
              {
                dogs.map((dog) => (
                  <Dog {...dog} key={dog.id} />
                ))
              }
            </div>
          </div>
        </div>
      </HeroWrapper>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  /* height: 100vh; */
  /* max-height: 1100px; */
  position: relative;
  overflow: hidden;
  /* background-color: red; */
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  overflow: hidden;
  position: relative;
`

export default Hero
