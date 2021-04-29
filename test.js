const sliderContainer = document.querySelector(".sliders-container");
const sliderSections = document.querySelectorAll(".slider-section");

sliderSections.forEach(function (slide, i) {});

function slider(i) {
  const slides = document.querySelectorAll(`.slide-${i}`);
  const btnLeft = document.querySelector(`.slider__btn--left-${i}`);
  const btnRight = document.querySelector(`.slider__btn--right-${i}`);
  let currentSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector(`.dots-${i}`);

  // functions

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot-${i}" data-slide="${i}"> </button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(`.dots__dot-${i}`)
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot-${i}[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      // if current slide is 1: -100%, 0%, 100%, 200%
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // event handlers

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
}

slider(0);
slider(1);
slider(2);


/// css


/* SLIDER */
.slider {
    width: 80%;
    height: 35rem;
    margin: 0 auto;
    position: relative;
  
    /* IN THE END */
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    top: 0;
    width: 100%;
    height: 35rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* THIS creates the animation! */
    transition: transform 1s;
  }
  
  .slider-section p {
    width: 80%;
    margin: 5vh auto;
  }
  
  button div {
    font-size: 2rem;
    line-height: 2rem;
  }
  
  .slide > img {
    /* Only for images that have different size than slide */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slider__btn {
    position: absolute;
    top: 50%;
    z-index: 10;
  
    border: none;
    background: rgba(255, 255, 255, 0.6);
    font-family: "Open Sans", sans-serif;
    color: #333;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    font-size: 2rem;
    cursor: pointer;
    line-height: 2rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow {
    display: block;
    margin: 0 auto;
    font-family: "Open Sans", sans-serif;
  }
  
  .slider__btn--left {
    left: 6%;
    transform: translate(-50%, -50%);
  }
  
  .slider__btn--right {
    right: 6%;
    transform: translate(50%, -50%);
  }
  
  .dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  
  .dots__dot {
    border: none;
    background-color: #b9b9b9;
    opacity: 0.7;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 1.75rem;
    cursor: pointer;
    transition: all 0.5s;
  
    /* Only necessary when overlying images */
    /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
  }
  
  .dots__dot:last-child {
    margin: 0;
  }
  
  .dots__dot--active {
    /* background-color: #fff; */
    background-color: #888;
    opacity: 1;
  } */ */
  

  <div class="slider slider-0 slider-lilies">
          <div class="slide-0">
            <img src="sliders-img/lily2.jpg" alt="Photo 2" />
          </div>
          <div class="slide-0">
            <img src="sliders-img/lily3.jpg" alt="Photo 3" />
          </div>
          <div class="slide-0">
            <img src="sliders-img/lily4.jpg" alt="Photo 4" />
          </div>
          <div class="slide-0">
            <img src="sliders-img/5986595788_825d43e5cf_b.jpg" alt="Photo 1" />
          </div>
          <div class="slide-0">
            <img src="sliders-img/lily1.jpg" alt="Photo 1" />
          </div>
          <button class="slider__btn slider__btn--left-0">
            <div>&larr;</div>
          </button>
          <button class="slider__btn slider__btn--right-0">
            <div>&rarr;</div>
          </button>

          <div class="dots-0"></div>
        </div>