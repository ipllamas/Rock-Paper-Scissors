//Initalizes and creates scoreboard
let playerScore = 0;
let computerScore = 0;
const playerScorePara = document.querySelector('.player-score');
const computerScorePara = document.querySelector('.computer-score');
playerScorePara.textContent = `Player: ${playerScore}`;
computerScorePara.textContent = `Computer: ${computerScore}`;

//Creates round-by-round results section using DOM manipulation
const resultsDiv = document.querySelector('.results');
const playerPara = document.createElement('p');
const computerPara = document.createElement('p');
const outcomePara = document.createElement('p');
playerPara.setAttribute('class', 'player-choice');
computerPara.setAttribute('class', 'computer-choice');
outcomePara.setAttribute('class', 'outcome');
resultsDiv.appendChild(playerPara);
resultsDiv.appendChild(computerPara);
resultsDiv.appendChild(outcomePara);

//add event listeners to each button
const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach((btn) => {
  btn.addEventListener('click', playRound)
});


function computerPlay(){
  //Math.floor() is needed as Math.random() returns a decimal 0 to 1
  //The formula used is Math.random() * (max-min)+min
  let randInt = Math.floor(Math.random() * 3);
  let randChoice; 

  if (randInt === 0) {
    randChoice = "Rock";
  } else if (randInt === 1) {
    randChoice = 'Paper';
  } else {
    randChoice = 'Scissors';
  }

  return randChoice;
}

function playRound(e) {
  //If score is already at 5, restart the game
  if(playerScore === 5 || computerScore === 5){
    restartGame();
    return;
  }

  //Take player choice from event target's class
  //and convers first character to upper case
  let playerChoice = e.target.getAttribute('class').slice(4);
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

  //Assigns a random choice for the computer
  let computerChoice = computerPlay();

  //Declares win/lose messages to display at the end of the round
  const winMessage = `Round Won! ${playerChoice} Beats ${computerChoice}!`
  const loseMessage = `Round Lost! ${computerChoice} Beats ${playerChoice}!`; 

  //Displays the choices on the web page
  playerPara.textContent = `Player chose ${playerChoice}`;
  computerPara.textContent = `Computer chose ${computerChoice}`;

  if (playerChoice === computerChoice) {
    outcomePara.textContent = 'Draw!';
    console.log("Draw!");
    return;
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      outcomePara.textContent = winMessage;
      updateScore('player');
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      updateScore('computer');
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      updateScore('player');
      outcomePara.textContent = winMessage;
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      updateScore('computer');
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      outcomePara.textContent = winMessage;
      updateScore('player');
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      updateScore('computer');
      console.log(loseMessage);
      return;
    }
  }
}

function updateScore(roundWinner){
  if (roundWinner === 'player'){
    playerScore++;
    playerScorePara.textContent = `Player: ${playerScore}`;
    if (playerScore === 5) {
      endGame('player');
    }
  } else if (roundWinner === 'computer') {
    computerScore++;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    if (computerScore === 5){
      endGame('computer');
    }
  } else if (roundWinner === 'restart') {
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
  }
}

function endGame(gameWinner){
  if (gameWinner === 'player'){
    outcomePara.textContent = 'Game Over! You Win!';
  } else {
    outcomePara.textContent = 'Game Over! You Lose!';
  }
  buttons.forEach((btn) => btn.textContent = "Replay");
  return;
}

function restartGame(){
  console.log('Game Restarted');
  playerScore = 0;
  computerScore = 0;
  updateScore('restart');
  document.querySelector('.rock').textContent = 'Rock';
  document.querySelector('.paper').textContent = 'Paper';
  document.querySelector('.scissors').textContent = 'Scissors';
  playerPara.textContent = '';
  computerPara.textContent = '';
  outcomePara.textContent = '';
}