const pics = [
  { name: "pic1", img: "images/1.png" },
  { name: "pic2", img: "images/2.png" },
  { name: "pic3", img: "images/3.png" },
  { name: "pic4", img: "images/4.png" },
  { name: "pic5", img: "images/5.png" },
  { name: "pic6", img: "images/6.png" },
  { name: "pic1", img: "images/1.png" },
  { name: "pic2", img: "images/2.png" },
  { name: "pic3", img: "images/3.png" },
  { name: "pic4", img: "images/4.png" },
  { name: "pic5", img: "images/5.png" },
  { name: "pic6", img: "images/6.png" },
];
pics.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < pics.length; i++) {
    const card = document.createElement("img");
    
    card.setAttribute("src", "images/pattern.png");
    card.setAttribute("data-id", i);
    card.style.width='150px';
    card.style.height='150px';
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");

 
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/pattern.png");
    cards[optionTwoId].setAttribute("src", "images/pattern.png");
    alert("упс");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("Ты нашел 2 одинаковые картинки");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/pattern.png");
    cards[optionTwoId].setAttribute("src", "images/pattern.png");
    alert("Попробуй еще!");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === pics.length / 2) {
    resultDisplay.textContent = "Ура!Ты нашел все совпадения";
  }
}
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(pics[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", pics[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
createBoard();
