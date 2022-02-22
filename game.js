function computerPlay(){
  //Math.floor() is needed as Math.random() returns a decimal 0 to 1
  //The formula used is Math.random() * (max-min)+min
  let randInt = Math.floor(Math.random() * 3);
  let randChoice; 

  if (randInt === 0) {
    randChoice = "rock";
  } else if (randInt === 1) {
    randChoice = 'paper';
  } else {
    randChoice = 'scissors';
  }

  return randChoice;
}

function playRound(e) {
  /* console.log(e);
  console.log(e.target);
  console.log(e.target.getAttribute('class')); */

  const selectedButton = e.target;
  const playerChoice = selectedButton.getAttribute('class').slice(4);
  const computerChoice = computerPlay();

  const winMessage = `You Win! ${playerChoice} beats ${computerChoice}!`
  const loseMessage = `You Lose! ${computerChoice} beats ${playerChoice}!`; 


  if (playerChoice === computerChoice) {
    console.log("Draw!");
    return;
  }

  /* console.log(`Player: ${playerChoice} ${typeof playerChoice}`);
  console.log(`Computer: ${computerChoice} ${typeof computerChoice}`); */
  
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log(winMessage);
      return;
    } else {
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log(winMessage);
      return;
    } else {
      console.log(loseMessage);
      return;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(winMessage);
      return;
    } else {
      console.log(loseMessage);
      return;
    }
  }
}

const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach((btn) => {
  btn.addEventListener('click', playRound)
});




/* function game(){
  
  console.log("Game Over!");
}

game(); */