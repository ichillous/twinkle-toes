import React, { useState, useEffect } from "react";
import './HeroCarousel.css';
import Sort from '../../utils/sort.js'

const HeroCarousel = (props) => {

  // Below sets state for the "current" carousel image displayed (using integers to refer to the index)
  const { currentIndex, setCurrentIndex } = props;
  const [heroCarousel, setHeroCarousel] = useState([])

    // Below array contains the image sources for the Hero Carousel.
  const heroImages = [
      "https://i.imgur.com/DZm54TS.jpeg",
      "https://i.imgur.com/RgAkNr1.jpg",
      "https://i.imgur.com/V9x68t8.jpg",
      "https://i.imgur.com/MlLrEWk.jpg",
      "https://i.imgur.com/x8emXbx.jpg",
  ]

  useEffect(() => {
    showSlides(currentIndex);
  }, [currentIndex])
  

  // Below creates a set of divs containing each hero slide
  let heroSlides = heroImages.map((element, idx) => {
    return (
      <div className="invisible fade" key={idx}>
        <div className="number-text">{idx} / 5</div>
        <img src={element} alt={idx} key={idx} style={{

          width: "100%",

      }} />
      </div>
    )
  })

  function createHeroCarouselButtons() {
    let buttons = [];
    for (let i = 0; i < heroImages.length; i++) {
      buttons[i] =
        <span className="dot" onClick={() => currentSlide(i)} key={i}></span>
    }
    return buttons
  }
  
  const heroCarouselButtons = createHeroCarouselButtons()

  function showSlides(n) {
 
    if (n === undefined) {
      n = 0
    }


    heroSlides.forEach((element, idx) => {
      if (idx === n) {
        const selectedSlide = heroSlides[idx].props.children

        heroSlides[idx] = {
          ...heroSlides[idx], props: {
            className: "visible fade", children:
              selectedSlide
          }
        }
      }
      if (idx !== n) {
        const selectedSlide = heroSlides[idx].props.children

        heroSlides[idx] = {
          ...heroSlides[idx], props: {
            className: "invisible fade", children:
              selectedSlide
          }
        }
      }
    }
    )
    setCurrentIndex(n)
    setHeroCarousel(heroSlides)
  }

function currentSlide(n) {
    showSlides(n);
  };

  function plusSlides(n) {
    let tempIndex = currentIndex

    if ((n === (-1)) && (currentIndex === 0)) {
      console.log(currentIndex)
      tempIndex = (heroSlides.length -= 1);
      console.log(currentIndex)
    };
    if (n === (-1) && (currentIndex !== 0)) {
      tempIndex -= 1;
    };
    if (n === 1 && (currentIndex === (heroSlides.length - 1))) {
      tempIndex = 0;
    };
    if (n === 1 && (currentIndex !== (heroSlides.length -1))) {
      tempIndex += 1;
    };

    showSlides(tempIndex)
  };

  return (
    <div className="hero-carousel-container">    
      
      <div className="hero-carousel">
        {heroCarousel}
      </div>
    
      <a className="prev" onClick={() => plusSlides(-1)} > &#10094;</a>
      <a className="next" onClick={() => plusSlides(1)} > &#10095;</a>
      
      <br></br>
  
      <div className="hero-carousel-buttons" style={{
          textAlign: "center",
        }}>
        {heroCarouselButtons}
      </div>

  </div>
  )
}

export default HeroCarousel;