// Selecting all classes with .card

// Going over each with forEach

// Adding an eventListener('click') to the forEach method.
// Each .card has a toggle on it for the .back class (see: style.css)

// Adding an if statement. if the innerText isn't the same (see: .one && .two)
// The card will remain, if it is the same, it will simply toggle.

//
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("back");
    if (card.textContent != card.innerText) {
      card.classList.toggle("selected");
    } else {
      console.log("hi");
    }
  });
});

// Does not work w/ CSS Grid
$(function () {
  var parent = $(".cards");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});