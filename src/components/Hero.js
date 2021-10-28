import React from 'react';
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import './App.css';
import Dog from './Dog';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';
import Loading from './Loading';



function Hero() {
  const [error, setError] = useState(null);
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    let api = "https://api.thedogapi.com/v1/breeds?limit=12&page=100?Sapi_key=2c1958d5-790f-4725-87cc-7e59767ba77f";
    fetch(api)
      .then( res => res.json())
      .then( result => {
        setLoading(true);
        setError(null);
        setDogs(result);
      },
      (err) => {
        setError(err.message);
        setLoading(true);
        console.log(err);
      }
      );
    },[]
    );
    console.log(dogs);

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
              <img className="custom-img" src={bg1} width="100%" height="100%" alt="bg1"/>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h2>Orhan Pamuk</h2>
                  <p className="fst-italic">"Dogs do speak, but only to those who know how to listen."</p>
                  <p><a className="btn btn-md btn-primary" href="https://github.com/Patrickodey360coder/DogsHaven" target="blank" rel="noreferrer">Github</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="custom-img" src={bg2} width="100%" height="100%" alt="bg2"/>
              <div className="container">
                <div className="carousel-caption">
                  <h2>Rodges A. Caras</h2>
                  <p className="fst-italic">"Dogs are not our whole life, but they make our lives whole."</p>
                  <p><a className="btn btn-md btn-primary" href="https://github.com/Patrickodey360coder/DogsHaven" target="blank" rel="noreferrer">Github</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="custom-img" src={bg3} alt="bg3"/>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h2>One more for good measure.</h2>
                  <p className="fst-italic">"Some representative placeholder content for the third slide of this carousel."</p>
                  <p><a className="btn btn-md btn-primary" href="https://github.com/Patrickodey360coder/DogsHaven" target="blank" rel="noreferrer">Github</a></p>
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
                error && (
                  <div className="container">
                    <h3 className="text-center text-danger">{error}</h3>
                  </div>
                )
              }
              {
                !loading && (
                  <Loading/>
                )
              }
              {
                dogs && (
                  dogs.map((dog) => (
                    <Dog {...dog} key={dog.id} />
                ))
                )
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
