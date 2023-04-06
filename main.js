const ratingsContainer = document.querySelector(".content-front__ratings");
const submitBtn = document.querySelector(".content-front__submit-btn");
const ratingChoice = document.querySelector(
  ".content-back__selection-ratingChoice"
);
const rating = document.querySelectorAll(".content-front__ratings-rating");
const front = document.querySelector(".content-front");
const back = document.querySelector(".content-back");

ratingsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".content-front__ratings-rating");

  if (!clicked) return;

  rating.forEach((rate) =>
    rate.classList.remove("content-front__ratings-rating--active")
  );
  clicked.classList.add("content-front__ratings-rating--active");
  ratingChoice.innerHTML = clicked.textContent;
});

submitBtn.addEventListener("click", function () {
  front.classList.add("hidden");
  back.classList.remove("hidden");
});
