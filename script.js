const modalBtn = document.querySelector(".btn-start");
const overlay = document.querySelector(".overlay");
modalBtn.addEventListener("click", () => {
  modalBtn.style.display = "none";
  overlay.style.display = "none";
});
const heading = document.querySelector(".scoreboard-title");
// LOGIC FOR GAME
function initGame() {
  let playerScore = 0;
  let computerScore = 0;
  let winner = "";

  const getPlayerScore = () => playerScore;
  const getComputerScore = () => computerScore;

  const IncrementPlayerScore = () => (playerScore += 1);
  const IncrementPlayerComputer = () => (computerScore += 1);

  const setWinner = (winner) => {
    console.log(`${winner} won.`);
  };

  return {
    getPlayerScore,
    getComputerScore,
    IncrementPlayerComputer,
    IncrementPlayerScore,
    setWinner,
  };
}
const game = initGame();
game.IncrementPlayerScore();
heading.textContent = game.getPlayerScore();

let playerWinner = document.querySelector(".player-score");
let computerWinner = document.querySelector(".computer-score");
console.log(playerWinner, computerWinner);

game.setWinner("player");
