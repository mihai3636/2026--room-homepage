console.log("Hello world!");

const btnNavEl = document.querySelector(".btn--mobile-nav");
const navEl = document.querySelector("nav");

const btnPrevMobile = document.getElementById("carouselBtnPrevMobile");
const btnNextMobile = document.getElementById("carouselBtnNextMobile");

btnNavEl.addEventListener("click", () => {
  navEl.dataset.open = navEl.dataset.open === "true" ? "false" : true;
  document.body.classList.toggle("no-scroll");
});

btnPrevMobile.addEventListener("click", () => {
  console.log("Prev clicked");
});

btnNextMobile.addEventListener("click", () => {
  console.log("Next clicked");
});
