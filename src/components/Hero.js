import React from 'react';
import styled from 'styled-components/macro';
import './App.css';
import Food from './Food';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
import afang from '../images/afang.jpg';
import egusi from '../images/egusi.jpg';
import okro from '../images/okro.jpg';
import vegetable from '../images/vegetable.jpg';
import whitesoup from '../images/whitesoup.jpg';
import banga from '../images/banga.jpg';
import beefstew from '../images/beefstew.jpg';
import chickenstew from '../images/chickenstew.jpg';
import nativestew from '../images/nativestew.jpg';
import chickensoup from '../images/chickensoup.jpg';
import beefsoup from '../images/beefsoup.jpg';
import goatsoup from '../images/goatsoup.jpg';
import jollofrice from '../images/jollofrice.jpg';
import coconutrice from '../images/coconutrice.jpg';
import friedrice from '../images/friedrice.jpg';
import jollofspag from '../images/jollofspag.jpg';
import spagstew from '../images/spagstew.jpg';

function Hero() {
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
                  <h2>Paul Prudhomme</h2>
                  <p className="fst-italic">"You don't need a silver fork to eat good food."</p>
                  <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="custom-img" src={bg2} width="100%" height="100%" alt="bg2"/>
              <div className="container">
                <div className="carousel-caption">
                  <h2>James Beard</h2>
                  <p className="fst-italic">"Food is our common ground, a universal experience."</p>
                  <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="custom-img" src={vegetable} alt="bg3"/>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h2>Julia Child.</h2>
                  <p className="fst-italic">"People who love to eat are always the best people."</p>
                  <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
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

        <div className="album py-5 bg">
          <div className="container">
            <h2 className="text-center mb-5 orange">Delicacies</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg -4 g-3">
              <>
                <Food name="Afang(Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N13,000" price1="N6,000" img={afang}/>
                <Food name="Egusi (Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={egusi}/>
                <Food name="Okra (Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={okro}/>
                <Food name="Vegetable (Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N13,000" price1="N6,000" img={vegetable}/>
                <Food name="White Soup (Goat & Assorted Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N13,000" price1="N6,000" img={whitesoup}/>
                <Food name="Banga Soup" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N13,000" price1="N6,000" img={banga}/>

                <Food name="Tomato Stew (Goat & Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={beefstew}/>
                <Food name="Tomato Stew (Chicken)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N12,000" price1="N6,000" img={chickenstew}/>
                <Food name="Banga Stew (Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N16,000" price2="N12,000" price1="N6,000" img={banga}/>
                <Food name="Native Stew (Beef or Goat Meat)" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={nativestew}/>

                <Food name="Chicken Pepper Soup" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={chickensoup}/>
                <Food name="Assorted Pepper Soup" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="16,000" price2="12,000" price1="N6,000" img={beefsoup}/>
                <Food name="Goat Meat" quantity1="1 Litre" quantity2="3 Litres" quantity3="5 Litres" price3="N15,000" price2="N10,000" price1="N5,000" img={goatsoup}/>

                <Food name="Jollof Rice" quantity1="1 Litre" price1="N5,500" img={jollofrice}/>
                <Food name="Coconut Rice" quantity1="1 Litre" price1="N5,500" img={coconutrice}/>
                <Food name="Fried Rice" quantity1="1 Litre" price1="N5,500" img={friedrice}/>

                <Food name="Jollof Spaghetti" quantity1="1 Litre" price1="N5,500" img={jollofspag}/>
                <Food name="Spaghetti & Stew" quantity1="1 Litre" price1="N7,000" img={spagstew}/>
              </>
            </div>
          </div>
        </div>
      </HeroWrapper>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: red!important;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export default Hero
