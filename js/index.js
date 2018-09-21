const cardsArray = [{
    'name': 'turtleone',
    'img': '../images/turtleone.jpg',
  },
  {
    'name': 'turtletwo',
    'img': '../images/turtletwo.jpg',
  },
  {
    'name': 'turtlethree',
    'img': '../images/turtlethree.jpg',
  },
  {
    'name': 'turtlefour',
    'img': '../images/turtlefour.jpg',
  },
  {
    'name': 'turtlefive',
    'img': '../images/turtlefive.jpg',
  },
  {
    'name': 'turtlesix',
    'img': '../images/turtlesix.jpg',
  },
  {
    'name': 'turtleseven',
    'img': '../images/turtleseven.jpg',
  },
  {
    'name': 'turtleeight',
    'img': '../images/turtleeight.jpg',
  },
  {
    'name': 'turtlenine',
    'img': '../images/turtlenine.jpg',
  },
  {
    'name': 'turtleten',
    'img': '../images/turtleten.jpg',
  },
  {
    'name': 'turtleeleven',
    'img': '../images/turtleeleven.jpg',
  },
  {
    'name': 'turtletwelve',
    'img': '../images/turtletwelve.jpg',
  },
];

const shellGame = document.getElementById('shellGame');
const layout = document.createElement('section');
layout.setAttribute('class', 'primary');
shellGame.appendChild(layout);

let moreTurtles = cardsArray.concat(cardsArray);
moreTurtles.sort(() => 0.5 - Math.random());

moreTurtles.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('turtles');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  layout.appendChild(card);
});

let count = 0;
layout.addEventListener('click', (event) => {
  const turtleClick = event.target;
  if (turtleClick.nodeName === 'SECTION') return;
  turtleClick.classList.add('clickedturtle');
  if (count < 2) {
    count++;
    turtleClick.classList.add('clickedturtle');
  }
})