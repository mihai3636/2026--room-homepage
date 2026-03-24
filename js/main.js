console.log("Hello world!");

const btnNavEl = document.querySelector(".btn--mobile-nav");
const navEl = document.querySelector("nav");

btnNavEl.addEventListener("click", () => {
  navEl.dataset.open = navEl.dataset.open === "true" ? "false" : true;
  document.body.classList.toggle("no-scroll");
});
