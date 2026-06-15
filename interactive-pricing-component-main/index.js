const slider = document.getElementById("slider");
const price = document.getElementById("price");
const pageviews = document.getElementById("pageviews");
const toggle = document.getElementById("toggle");

const views = ["10K", "50K", "100K", "500K", "1M"];
const prices = [8, 12, 16, 24, 36];
let yearly = false;

function updateValues() {
  let i = slider.value - 1;
  let cost = prices[i];
  if (yearly) cost = cost * 0.75; // 25% off
  pageviews.textContent = views[i] + " PAGEVIEWS";
  price.innerHTML = "$" + cost.toFixed(2) + " <span>/ month</span>";

  let value = ((slider.value - 1) / (slider.max - 1)) * 100;
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%)`;
}

slider.addEventListener("input", updateValues);
toggle.addEventListener("click", () => {
  yearly = !yearly;
  toggle.classList.toggle("active");
  updateValues();
});

updateValues();
