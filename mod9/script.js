const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const duplicatedNumbers = [...numbers, ...numbers];

const shuffledArray = duplicatedNumbers.sort(() => Math.random() - 0.5);

const gameContainer = document.getElementById('game-container');

shuffledArray.forEach((number) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.number = number;
  card.addEventListener('click', () => flipCard(card));
  gameContainer.appendChild(card);
});

let flippedCards = [];
let canFlip = true; 

function flipCard(card) {
  if (!canFlip || card.classList.contains('flipped')) {
    return;
  }

  card.classList.add('flipped');
  card.textContent = card.dataset.number;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    canFlip = false; 
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.number === card2.dataset.number) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    checkWin();
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    card1.textContent = '';
    card2.textContent = '';
  }

  flippedCards = [];
  canFlip = true;
}

function checkWin() {
  const matchedCards = document.querySelectorAll('.matched');

  if (matchedCards.length === shuffledArray.length) {
    alert('Поздравляю! Вы победили!');
    startButton.disabled = false;
  }
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

function startGame() {
  location.reload(); 
}