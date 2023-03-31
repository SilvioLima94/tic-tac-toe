(function Gameboard() {
  const X_MARK = "x";
  const CIRCLE_MARK = "circle";

  const cellElements = document.querySelectorAll(".cell");
  const board = document.getElementById("board");
  const winningMessage = document.getElementById("winningMessage");
  const restart = document.getElementById("restartBtn");
  const winnigMessageText = document.querySelector("[data-winner-message]");

  let circleTurn = Boolean;
  const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  //start game
  startGame();

  function startGame() {
    circleTurn = false;
    cellElements.forEach((cell) => {
      cell.classList.remove(X_MARK);
      cell.classList.remove(CIRCLE_MARK);
      cell.removeEventListener("click", handleClick);
      cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessage.classList.remove("show");
  }
  //restart game
  restart.addEventListener("click", startGame);

  function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_MARK : X_MARK;
    placeMark(cell, currentClass);
    checkWins(currentClass)
      ? endGame(false)
      : isDraw()
      ? endGame(true)
      : swapTurns();
    setBoardHoverClass();
  }

  function endGame(draw) {
    draw
      ? (winnigMessageText.innerText = "Draw!")
      : (winnigMessageText.innerText = `${circleTurn ? "O" : "X"} Wins!`);
    winningMessage.classList.add("show");
  }

  function isDraw() {
    return [...cellElements].every((cell) => {
      return (
        cell.classList.contains(X_MARK) || cell.classList.contains(CIRCLE_MARK)
      );
    });
  }

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
  }

  function swapTurns() {
    circleTurn = !circleTurn;
  }

  function setBoardHoverClass() {
    board.classList.remove(X_MARK);
    board.classList.remove(CIRCLE_MARK);

    circleTurn ? board.classList.add(CIRCLE_MARK) : board.classList.add(X_MARK);
  }

  function checkWins(currentClass) {
    return WINNING_COMBOS.some((combination) => {
      return combination.every((index) => {
        return cellElements[index].classList.contains(currentClass);
      });
    });
  }
})();
