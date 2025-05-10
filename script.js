let playerName = '';
let score = 0;
let highScore = localStorage.getItem('cricketHighScore') || 0;
let highScoreName = localStorage.getItem('cricketHighScoreName') || '-';

const playerNameSpan = document.getElementById('playerName');
const scoreSpan = document.getElementById('score');
const highScoreSpan = document.getElementById('highScore');
const highScoreNameSpan = document.getElementById('highScoreName');
const resultMsg = document.getElementById('resultMsg');

function startGame() {
  const input = document.getElementById('playerNameInput').value.trim();
  if (!input) {
    alert('Please enter your name.');
    return;
  }

  playerName = input;
  document.getElementById('nameInput').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';

  playerNameSpan.textContent = playerName;
  scoreSpan.textContent = score;
  highScoreSpan.textContent = highScore;
  highScoreNameSpan.textContent = highScoreName;
}

function playGame(userChoice) {
  const choices = ['Bat', 'Ball', 'Stump'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText;
  if (userChoice === computerChoice) {
    resultText = `It's a tie! Both chose ${userChoice}`;
  } else if (
    (userChoice === 'Bat' && computerChoice === 'Ball') ||
    (userChoice === 'Ball' && computerChoice === 'Stump') ||
    (userChoice === 'Stump' && computerChoice === 'Bat')
  ) {
    resultText = `You won! You chose ${userChoice}, computer chose ${computerChoice}`;
    score++;
  } else {
    resultText = `Computer won! You chose ${userChoice}, computer chose ${computerChoice}`;
    score = 0; // reset score if lost
  }

  resultMsg.textContent = resultText;
  scoreSpan.textContent = score;

  if (score > highScore) {
    highScore = score;
    highScoreName = playerName;
    localStorage.setItem('cricketHighScore', highScore);
    localStorage.setItem('cricketHighScoreName', highScoreName);
    highScoreSpan.textContent = highScore;
    highScoreNameSpan.textContent = highScoreName;
  }
}
