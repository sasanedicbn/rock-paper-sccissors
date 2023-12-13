const modalBtn = document.querySelector(".btn-start");
const overlay = document.querySelector(".overlay");
modalBtn.addEventListener("click", () => {
  modalBtn.style.display = "none";
  overlay.style.display = "none";
});
const heading = document.querySelector(".scoreboard-title");
const winner = document.querySelector(".player");
const displayPlayerBtn = document.querySelector(".questionnaire-player");
const displayComputerBtn = document.querySelector(".questionnaire-computer");
const displayPlayerPoint = document.querySelector(".player-score");
const displayComputerPoint = document.querySelector(".computer-score");
const buttons = document.querySelectorAll(".btn");
const btnPlayAgain = document.querySelector(".btn-playAgain");
const btnPlayAgainOverlay = document.querySelector(".modalWin");
// LOGIC FOR GAME
function initGame() {
  let playerScore = 0;
  let computerScore = 0;
  let winner;

  const getPlayerScore = () => playerScore;
  const getComputerScore = () => computerScore;

  const IncrementPlayerScore = () => (playerScore += 1);
  const IncrementComputerScore = () => (computerScore += 1);

  const setWinner = (winner) => {
    winner.textContent = `Winner is ${winner} `;
  };
  return {
    getPlayerScore,
    getComputerScore,
    IncrementComputerScore,
    IncrementPlayerScore,
    setWinner,
  };
}
const game = initGame();

function getWinner(Player, Computer) {
  if (
    (Player === "rock" && Computer === "scissors") ||
    (Player === "scissors" && Computer === "paper") ||
    (Player === "paper" && Computer === "rock")
  ) {
    displayPlayerPoint.textContent = game.IncrementPlayerScore();
    if (displayPlayerPoint.textContent >= 3) {
      winnerModal("Player");
      console.log("PLAYER WIN");
    }
    heading.textContent = "Point for Player";
  } else if (Player === Computer) {
    heading.textContent = "TIED";
  } else {
    displayComputerPoint.textContent = game.IncrementComputerScore();
    if (displayComputerPoint.textContent >= 3) {
      winnerModal("Computer");
      console.log("COMP WIN");
    }
    heading.textContent = "Point for Computer";
  }
}
//e target
//dataSet

//GENERATE RANDOM NUMBER
function RandomComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choice.length);
  const randomChoice = choice[randomNumber];
  console.log(randomChoice);
  return randomChoice;
}
const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    //use emoji from html
    const playerEmoji = event.target.textContent;
    //use dataset to catch data-action from html
    const playerAction = event.target.dataset.action;
    //display Emoji
    displayPlayerBtn.textContent = `${playerEmoji}`;

    //call function and get random (paper,scissors,rock)
    const computerAction = RandomComputerChoice();
    console.log(computerAction);
    //display emoji from emojiMap[random]
    displayComputerBtn.textContent = `${emojiMap[computerAction]}`;
    //call winner function
    console.log();
    getWinner(playerAction, computerAction);
  })
);
const winnerModal = (winner) => {
  const newElement = document.createElement("div");
  newElement.classList.add("modalWin");
  newElement.textContent = `This game win: ${winner}`;
  document.body.appendChild(newElement);
};

btnPlayAgain.addEventListener("click", () => {
  btnPlayAgain.style.display = "none";
  btnPlayAgainOverlay.style.display = "none";
});
