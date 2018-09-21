const cardsArray = [{
    name: "turtleone",
    img: "../images/turtleone.jpg"
  },
  {
    name: "turtletwo",
    img: "../images/turtletwo.jpg"
  },
  {
    name: "turtlethree",
    img: "../images/turtlethree.jpg"
  },
  {
    name: "turtlefour",
    img: "../images/turtlefour.jpg"
  },
  {
    name: "turtlefive",
    img: "../images/turtlefive.jpg"
  },
  {
    name: "turtlesix",
    img: "../images/turtlesix.jpg"
  },
  {
    name: "turtleseven",
    img: "../images/turtleseven.jpg"
  },
  {
    name: "turtleeight",
    img: "../images/turtleeight.jpg"
  },
  {
    name: "turtlenine",
    img: "../images/turtlenine.jpg"
  },
  {
    name: "turtleten",
    img: "../images/turtleten.jpg"
  },
  {
    name: "turtleeleven",
    img: "../images/turtleeleven.jpg"
  },
  {
    name: "turtletwelve",
    img: "../images/turtletwelve.jpg"
  }
];
const moreTurtles = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

let guessOne = "";
let guessTwo = "";
let count = 0;
let previousTurtle = null;
let pause = 1200;

const shellGame = document.getElementById("shellGame"); // Game
const layout = document.createElement("section"); // Grid
layout.setAttribute("class", "primary");
shellGame.appendChild(layout);

moreTurtles.forEach(item => {
  const {
    name,
    img
  } = item;

  const turtleFront = document.createElement("div");
  turtleFront.classList.add("turtleFront");

  const turtleBack = document.createElement("div");
  turtleBack.classList.add("turtleBack");
  turtleBack.style.backgroundImage = `url(${img})`;

  const card = document.createElement("div");
  card.classList.add("turtles");
  card.dataset.name = name;

  layout.appendChild(card);
  card.appendChild(turtleFront);
  card.appendChild(turtleBack);
});

const matchTurtle = () => {
  const selected = document.querySelectorAll(".clickedturtle");
  selected.forEach(card => {
    card.classList.add("matchingturtles");
  });
};

const resetTurtle = () => {
  guessOne = "";
  guessTwo = "";
  count = 0;
  previousTurtle = null;
  const selectedTurtle = document.querySelectorAll(".clickedturtle");
  selectedTurtle.forEach(turtleCard => {
    turtleCard.classList.remove("clickedturtle");
  });
};

layout.addEventListener("click", event => {
  const turtleClick = event.target;
  if (
    turtleClick.nodeName === "SECTION" ||
    turtleClick === previousTurtle ||
    turtleClick.parentNode.classList.contains("clickedturtle") ||
    turtleClick.parentNode.classList.contains('matchingturtles')
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      guessOne = turtleClick.parentNode.dataset.name;
      console.log(guessOne);
      turtleClick.parentNode.classList.add("clickedturtle");
    } else {
      guessTwo = turtleClick.parentNode.dataset.name;
      console.log(guessTwo);
      turtleClick.parentNode.classList.add("clickedturtle");
    }
    if (guessOne && guessTwo) {
      if (guessOne === guessTwo) {
        setTimeout(matchTurtle, pause);
      }
      setTimeout(resetTurtle, pause);
    }
    previousTurtle = turtleClick;
  }
});