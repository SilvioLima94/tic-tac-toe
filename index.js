const Gameboard = ((name = "John Doe") => {
  const gameBoardArr = ["X", "O"];
  const getInfo = console.log(
    `Arr length, ${gameBoardArr.length}. Hello, ${name}`
  );
  return { getInfo };
})();

const Player = (score) => {
  return {
    score,
    getInfo() {
      console.log(`score: ${score}`);
    },
  };
};
const p1 = Player(23);
console.log(p1.getInfo());

//the spaghetti way
const box = document.querySelector(".box");
box.addEventListener("click", addToDisplay);
const box2 = document.querySelector("#box-2");
box2.addEventListener("click", addToDisplay2);
const restartGame = document.getElementById("restart-game");
restartGame.addEventListener("click", () => console.log("btn clicked"));

function addToDisplay() {
  return (box.innerHTML = "X");
}
function addToDisplay2() {
  return (box2.innerHTML = "0");
}
