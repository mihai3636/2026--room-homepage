console.log("Hello world!");

const btnNavEl = document.querySelector(".btn--mobile-nav");
const navEl = document.querySelector("nav");

const btnPrevMobile = document.getElementById("carouselBtnPrevMobile");
const btnNextMobile = document.getElementById("carouselBtnNextMobile");

const pictureEls = [
  ...document.querySelectorAll(".carousel__picture > .carousel__img"),
];

const infoContentEls = [...document.querySelectorAll(".info__content")];

let currentIndex = 0;

btnNavEl.addEventListener("click", () => {
  navEl.dataset.open = navEl.dataset.open === "true" ? "false" : true;
  document.body.classList.toggle("no-scroll");
});

btnPrevMobile.addEventListener("click", () => {
  if (currentIndex === 0) return;

  currentIndex--;
  console.log(`Current index: ${currentIndex}`);
  renderCarousel();
});

btnNextMobile.addEventListener("click", () => {
  if (currentIndex === 2) return;

  currentIndex++;

  console.log(`Current index: ${currentIndex}`);
  renderCarousel();
});

function renderCarousel() {
  pictureEls.forEach((pic, index) => {
    const offset = (index - currentIndex) * 100;
    const translateValue = `translateX(${offset}%)`;
    pic.style.transform = translateValue;

    console.log(translateValue);
  });

  renderInfoContent();
}

function renderInfoContent() {
  infoContentEls.forEach((infoContentEl) => {
    infoContentEl.classList.add("hidden");
  });

  infoContentEls[currentIndex].classList.remove("hidden");
}

renderCarousel();
