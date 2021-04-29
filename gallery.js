// //SLIDER

const sliders = document.querySelectorAll(".slider");
console.log(sliders);

const slider = function (number) {
  const slides = document.querySelectorAll(`.slide-${number}`);
  const slider = document.querySelector(`.slider-${number}`);
  const btnLeft = document.querySelector(`.slider__btn--left-${number}`);
  const btnRight = document.querySelector(`.slider__btn--right-${number}`);
  let currentSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector(`.dots-${number}`);

  // functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot-${number}" data-slide="${i}"> </button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(`.dots__dot-${number}`)
      .forEach((dot) => dot.classList.remove(`dots__dot--active`));
    document
      .querySelector(`.dots__dot-${number}[data-slide='${slide}']`)
      .classList.add(`dots__dot--active`);
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
    if (e.target.classList.contains(`dots__dot-${number}`)) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

for (let i = 0; i < sliders.length; i++) {
  console.log(i);
  console.log(sliders[i]);
  slider(i);
}
