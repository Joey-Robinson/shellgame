// const cards = document.querySelectorAll('.card');
// for (let i = 0; i < cards.length; i++) {
//   const target = Math.floor(Math.random() * cards.length - 1) + 1;
//   const targetTwo = Math.floor(Math.random() * cards.length - 1) + 1;
//   cards.index(target).before(cards.index(targetTwo));
// }

// const load = () => {
//   const cards = document.querySelectorAll('.card');
//   const cardContainer = document.getElementById('cardContainer').clientHeight;
// }
// window.onload = load;

// const rotate = () => {
//   console.log('fuck you')
// }
const cards = document.querySelectorAll('.card')
// .addEventListener('click', rotate);
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('back')
  })
})


// Does not work w/ CSS Grid
$(function () {
  var parent = $(".cards");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});