const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplayer = document.getElementById(
  "computerScoreDisplayer"
);
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDIsplay");
const mainDisplay = document.getElementById("mainDisplay");

rockBtn.addEventListener("click", () => playRound(0));
paperBtn.addEventListener("click", () => playRound(1));
scissorsBtn.addEventListener("click", () => playRound(2));

function getComputerChoice() {
  const compNumber = Math.floor(Math.random() * 3);
  return valueChoice(compNumber);
}
function getHumanChoice() {
  const playerChoice = prompt("Rock - 0, Paper - 1, Scissors - 2");
  return valueChoice(playerChoice);
}

function valueChoice(numberChoice, bool = false) {
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

function playRound(playernumber) {
  const compC = getComputerChoice();
  const playerC = playernumber;
  let result = "";
  let difference = compC - playerC;
  if (difference === 0) {
    console.log("Tie!");
    result = "Tie!";
    resultMsg(playerC, compC);
  } else if (difference === -1 || difference === 2) {
    console.log("Player Won!");
    result = "Player Won!";
    humanScore++;
    resultMsg(playerC, compC);
  } else {
    console.log("Computer Won!");
    result = "Computer Won!";
    computerScore++;
    resultMsg(playerC, compC);
  }
  //result display
  mainDisplay.textContent = result;
  playerScoreDisplay.textContent = humanScore;
  computerScoreDisplayer.textContent = computerScore;
  playerChoiceDisplay.textContent = valueChoice(playernumber, true);
  computerChoiceDisplay.textContent = valueChoice(compC, true);
}

function resultMsg(playerC, compC) {
  console.log(`Player: ${valueChoice(playerC, true)}`);
  console.log(`Computer: ${valueChoice(compC, true)}`);
  console.log(`Score:\n\tPlayer: ${humanScore}\n\tComputer: ${computerScore}`);
}
