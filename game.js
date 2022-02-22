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

function playRound(playerChoice, computerChoice) {
  //Checks if player did not input anything
  if (!playerChoice) {
    return "No choice given!";
  }

  //converts 'rock' into 'Rock', 'paper' into 'Paper', etc.
  let player = playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1).toLowerCase();
  let computer = computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1).toLowerCase();
  
  //Checks if the player did not input a valid choice
  if (player !== 'Scissors' && player !== 'Rock' && player !== 'Paper'){
    return "Invalid Choice!";
  }

  let winMessage = `You Win! ${player} beats ${computer}!`;
  let loseMessage = `You Lose! ${computer} beats ${player}!`;

  if (player === computer) {
    return "Draw!";
  }

  console.log(`Player: ${player} ${typeof player}`);
  console.log(`Computer: ${computer} ${typeof computer}`);
  
  if (player === "Rock") {
    if (computer === "Scissors") {
      return winMessage;
    } else {
      return loseMessage;
    }
  } else if (player === "Scissors") {
    if (computer === "Paper") {
      return winMessage;
    } else {
      return loseMessage;
    }
  } else if (player === "Paper") {
    if (computer === "Rock") {
      return winMessage;
    } else {
      return loseMessage;
    }
  }
}

function game(){
  
  console.log("Game Over!");
}

game();