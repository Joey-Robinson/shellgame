const cardsArray = [
  {
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

const shellGame = document.getElementById("shellGame");
const layout = document.createElement("section");
layout.setAttribute("class", "primary");
shellGame.appendChild(layout);

let moreTurtles = cardsArray.concat(cardsArray);
moreTurtles.sort(() => 0.5 - Math.random());

moreTurtles.forEach(item => {
  const turtleFront = document.createElement("div");
  turtleFront.classList.add("turtleFront");

  const turtleBack = document.createElement("div");
  turtleBack.classList.add("turtleBack");
  turtleBack.style.backgroundImage = `url(${item.img})`;

  const card = document.createElement("div");
  card.classList.add("turtles");
  card.dataset.name = item.name;

  layout.appendChild(card);
  card.appendChild(turtleFront);
  card.appendChild(turtleBack);
});

let pause = 1200;
let count = 0;
let guessOne = "";
let guessTwo = "";
let previousTurtle = null;

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
  const selectedTurtle = document.querySelectorAll(".clickedturtle");
  selectedTurtle.forEach(turtleCard => {
    turtleCard.classList.remove("clickedturtle");
  });
};

shellGame.addEventListener("click", event => {
  let turtleClick = event.target;
  if (turtleClick.nodeName === "section" || turtleClick === previousTurtle) {
    return;
  }
  turtleClick.classList.add("clickedturtle");
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
    if (guessOne !== "" && guessTwo !== "") {
      if (guessOne === guessTwo) {
        setTimeout(matchTurtle, pause);
        setTimeout(resetTurtle, pause);
      } else {
        setTimeout(resetTurtle, pause);
      }
    }
    previousTurtle = turtleClick;
  }
});
