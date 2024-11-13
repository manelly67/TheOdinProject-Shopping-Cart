function carouselScript(arg1, arg2, arg3, arg4, arg5) {
  const carouselItemsArray = arg1;
  const divIndicators = arg2;
  const circleStyle = arg3;
  const circleActive = arg4;
  // arg5 is the useState() setSlides

  switch (carouselItemsArray.length !== 0) {
    case true:
      {
        const iterator1 = carouselItemsArray.entries();
        let arraySlides = [];
        let arrayCircles = [];
        let index = 0;
        let num = 0;
        const buttonToBeClean = Array.from(
          document.querySelectorAll(`.${circleStyle}`)
        );
        buttonToBeClean.forEach((e) => e.remove());
        const buttonActiveToBeClean = Array.from(
          document.querySelectorAll(`.${circleActive}`)
        );
        buttonActiveToBeClean.forEach((e) => e.remove());

        carouselItemsArray.forEach((element) => {
          index = iterator1.next().value;
          num = Number(index[0]);
          element.setAttribute('data', num + 1);
          element.setAttribute('id', `item${num + 1}`);
          arraySlides.push(index[1]);
          console.log(arraySlides);
          arg5(arraySlides); // arg5 is the setSlides useState
          const circle = document.createElement('button');
          circle.classList.add(circleStyle);
          circle.setAttribute('data', num + 1);
          circle.setAttribute('id', `circle${num + 1}`);
          circle.setAttribute('tabindex',-1);
          arrayCircles.push(circle);
          divIndicators.appendChild(circle);
        });
      }
      break;
    case false:
      break;
  }
}

function getPreviousSlide(arg1, arg2) {
  console.log('soy la funcion previous');
  console.log(arg1);
  console.log(arg2);
  let [ slideActive ] = arg1;
  let arraySlides = arg2;

  switch (arraySlides.length !== 0) {
    case true: {
      let indexActive = slideActive.getAttribute('data') - 1;
      let indexPrevious = indexActive - 1;
      if (indexPrevious < 0) {
        indexPrevious = arraySlides.length - 1;
      }
      console.log(indexPrevious);
      let previous = arraySlides[indexPrevious];
      console.log(previous);
      return previous;
    }
    case false:
      return null;
  }
}

function getNextSlide(arg1, arg2) {
  console.log('soy la funcion next');
  console.log(arg1);
  console.log(arg2);
  let [ slideActive ] = arg1;
  let arraySlides = arg2;

  switch (arraySlides.length !== 0) {
    case true:
{
      let indexActive = slideActive.getAttribute('data') - 1;
      let indexNext = indexActive + 1;
      if (indexNext >= arraySlides.length) {
        indexNext = 0;
      }
      console.log(indexNext);
      let next = arraySlides[indexNext];
      console.log(next);
      return next;
    }
      
    case false:
      return null;
    
  }
}

function switchActive(arg1, arg2, arg3, arg4, arg5) {
  console.log('soy la funcion swicht');
  console.log(arg1);
  console.log(arg3, arg5);
  let [ tobeInactive ] = arg1;
  let tobeActive = arg2;
  let active = arg3;
  // arg4 is the useState setSlides
  let item = arg5;
  
  tobeInactive.classList.remove(`${active}`);
  tobeActive.classList.add(`${active}`);
  let newSetItems = Array.from(document.querySelectorAll(`.${item}`));
  console.log(newSetItems);
  arg4(newSetItems);
}

function fillActiveCircle(arg1, arg2, arg3) {
  console.log('function fill active circle');
  console.log(arg1);
  let [ slideActive ] = arg1;
  console.log(slideActive);
  // arg2 is the style circle active - arg3 is the style circle
  switch (slideActive !== null) {
    case true:
        {
      const getIndex = slideActive.getAttribute('data');
      const activeCircle = document.getElementById(`circle${getIndex}`);
      console.log(activeCircle);
      activeCircle.classList.remove(`${arg3}`);
      activeCircle.classList.add(`${arg2}`);
        }
      break;
    case false:
      break;
  }
}

function clearCircle(arg1, arg2, arg3) {
  console.log('function clear circle');
  console.log(arg1);
  let [ slideActive ] = arg1;
  console.log(slideActive);
  // arg2 is the style circle active - arg3 is the style circle
  switch (slideActive !== null) {
    case true:
        {
      const getIndex = slideActive.getAttribute('data');
      const activeCircle = document.getElementById(`circle${getIndex}`);
      console.log(activeCircle);
      activeCircle.classList.remove(`${arg2}`);
      activeCircle.classList.add(`${arg3}`);
        }
      break;
    case false:
      break;
  }
}

/*
function setSlide(arg1, arg2) {
  let data = arg1.getAttribute('data');
  let selectedSlide = arg2[data - 1];
  console.log(selectedSlide);
  return selectedSlide;
}*/
/*
function getActiveButton(arg1, arg2) {
   let div = document.querySelector(`.${arg2}`);
  console.log(div);
  arg1(div);
}*/

export {
  carouselScript,
  getPreviousSlide,
  getNextSlide,
  switchActive,
  fillActiveCircle,
  clearCircle,
};
