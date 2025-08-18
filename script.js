function getComputerChoice() {
  const compNumber = Math.floor(Math.random() * 3);
  return valueChoice(compNumber);
}
function getHumanChoice() {
  const playerChoice = prompt("Rock - 0, Paper - 1, Scissors - 2");
  return valueChoice(playerChoice);
}

function valueChoice(numberChoice, bool) {
  let result;
  switch (parseInt(numberChoice)) {
    case 0:
      if (bool) {
        result = "Rock";
      } else {
        result = 0;
      }

      break;
    case 1:
      if (bool) {
        result = "Paper";
      } else {
        result = 1;
      }

      break;
    case 2:
      if (bool) {
        result = "Scissors";
      } else {
        result = 2;
      }

      break;
    default:
      break;
  }
  return result;
}
let computerScore = 0;
let humanScore = 0;

function playRound() {
  const compC = getComputerChoice();
  const playerC = getHumanChoice();

  let difference = compC - playerC;
  if (difference === 0) {
    console.log("Tie!");
    resultMsg(playerC, compC);
  } else if (difference === -1 || difference === -2) {
    console.log("Player Won!");
    humanScore++;
    resultMsg(playerC, compC);
  } else {
    console.log("Computer Won!");
    computerScore++;
    resultMsg(playerC, compC);
  }
}

function resultMsg(playerC, compC) {
  console.log(`Player: ${valueChoice(playerC, true)}`);
  console.log(`Computer: ${valueChoice(compC, true)}`);
  console.log(`Score:\n\tPlayer: ${humanScore}\n\tComputer: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
  playRound();
}
