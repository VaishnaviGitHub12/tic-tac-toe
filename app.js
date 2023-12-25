let currentPlayer = "X";

let arr = Array(9).fill(null); 

function handleClick(el) {

  const id = Number(el.id); 
  
  arr[id] = currentPlayer;

  el.innerHTML = currentPlayer;
  let soundUrl = "click.mp3";
  new Audio(soundUrl).play();

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "0" : "X";
  
}

function checkWinner() {
  if (
 
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    
    openPopup();
  }
}

var popup = document.querySelector(".popup");
var winner = document.querySelector("b");

function openPopup() {
  let blur = document.querySelector(".container-game");
  popup.classList.add("open-popup");
  winner.innerText += `${currentPlayer}`;

  blur.style.filter = "blur(5px)";
  let url = "success.mp3";
  new Audio(url).play();
}
function closePopup() {
  popup.classList.remove("open-popup");

  location.reload();
}

let newGame = document.getElementById("newGame");

newGame.addEventListener("click", function () {
  location.reload();
});