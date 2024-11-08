// REVISAR LUEGO FUNCIONA BIEN SIN INCLUIR LOS BOTONES
import {
  carouselScript,
  getPreviousSlide,
  getNextSlide,
  switchActive,
  fillActiveCircle,
  clearCircle,
 /*  getActiveButton, */
} from './carouselScript';
import { useState, useEffect } from 'react';
import leftChevron from '../assets/images/chevron-left.png';
import rightChevron from '../assets/images/chevron-right.png';

import styles from '../styles/Carousel.module.css';

const leftChevronImg = new Image();
leftChevronImg.src = leftChevron;

const rightChevronImg = new Image();
rightChevronImg.src = rightChevron;

const {
  container,
  carousel,
  carouselInner,
  indicators,
  item,
  active,
  previous,
  next,
  circle,
  circleActive,
  btnChevron,
} = styles;

const Carousel = (props) => {
  const [slides, setSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState(null);
  /*   const [circlesButtons,setCirclesButtons] = useState([]);
  const [activeButton, setActiveButton] = useState(null);*/
  const arrayCategory = props.arrayCategory;
  const first = props.arrayCategory[0];
  const rest = shiftArray(props.arrayCategory);

  function shiftArray(array) {
    let temp = [...array];
    temp.shift();
    return temp;
  }

  const listRestItems = rest.map((e) => (
    <div key={e} className={item}>
      <h3>{e}</h3>
    </div>
  ));

  useEffect(() => {
    const carouselItems = document.querySelectorAll(`.${item}`);
    const carouselItemsArray = [...carouselItems];
    const divIndicators = document.getElementById('indicators');

    carouselScript(
      carouselItemsArray,
      divIndicators,
      circle,
      circleActive,
      setSlides
    );
    
  }, [arrayCategory]);

  useEffect(() => {
    const activeSlide = Array.from(document.querySelectorAll(`.${active}`));
    setActiveSlide(activeSlide);
    console.log(activeSlide);
    fillActiveCircle(activeSlide, circleActive, circle);
   
  }, [slides]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the DOM here
      clearCircle(activeSlide, circleActive, circle);
      let tempSlide = getNextSlide(activeSlide, slides);
      switchActive(activeSlide, tempSlide, active, setSlides, item);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides,activeSlide]);

  return (
    <>
      <div className={container}>
        <h2 style={{ textAlign: 'center' }}>Carousel Example</h2>
        <div id="myCarousel" className={carousel}>
          <div className={carouselInner}>
            <div className={`${item} ${active}`}>
              <h3>{first}</h3>
            </div>
            {listRestItems === undefined ? <>{null}</> : <>{listRestItems}</>}
          </div>
          <ol id="indicators" className={indicators}></ol>

          <button
            id="previous"
            className={`${previous} ${btnChevron}`}
            onClick={() => {
              clearCircle(activeSlide, circleActive, circle);
              let tempSlide = getPreviousSlide(activeSlide, slides);
              switchActive(activeSlide, tempSlide, active, setSlides, item);
            }}
          >
            <img
              src={leftChevronImg.src}
              width="40%"
              height="25%"
              alt="left"
            ></img>
          </button>
          <button
            id="next"
            className={`${next} ${btnChevron}`}
            onClick={() => {
              clearCircle(activeSlide, circleActive, circle);
              let tempSlide = getNextSlide(activeSlide, slides);
              switchActive(activeSlide, tempSlide, active, setSlides, item);
            }}
          >
            <img
              src={rightChevronImg.src}
              width="40%"
              height="25%"
              alt="right"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
