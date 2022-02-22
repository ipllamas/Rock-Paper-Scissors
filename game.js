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
  //Take player choice from event target's class
  //and convers first character to upper case
  let playerChoice = e.target.getAttribute('class').slice(4);
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

  //Assigns a random choice for the computer
  let computerChoice = computerPlay();

  //Declares win/lose messages to display at the end of the round
  const winMessage = `You Win! ${playerChoice} Beats ${computerChoice}!`
  const loseMessage = `You Lose! ${computerChoice} Beats ${playerChoice}!`; 

  //Displays the choices on the web page
  playerPara.textContent = `Player chose ${playerChoice}`;
  computerPara.textContent = `Computer chose ${computerChoice}`;

  if (playerChoice === computerChoice) {
    outcomePara.textContent = 'Draw!';
    console.log("Draw!");
    return;
  }
  
  if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      outcomePara.textContent = winMessage;
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      outcomePara.textContent = winMessage;
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      outcomePara.textContent = winMessage;
      console.log(winMessage);
      return;
    } else {
      outcomePara.textContent = loseMessage;
      console.log(loseMessage);
      return;
    }
  }
}

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



const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach((btn) => {
  btn.addEventListener('click', playRound)
});




/* function game(){
  
  console.log("Game Over!");
}

game(); */