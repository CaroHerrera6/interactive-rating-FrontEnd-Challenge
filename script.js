const SUBMIT = document.getElementById("btn");
const RATES = document.querySelectorAll(".numbers");
let selected = document.getElementById("selected");

SUBMIT.addEventListener("click", () => {
  document.getElementById("thanks-container").classList.remove("d-none"),
    (document.getElementById("rating-container").style.display = "none");
});

RATES.forEach((rate) => {
  rate.addEventListener("click", () => {
    selected.innerHTML = rate.innerHTML;
  });
});
