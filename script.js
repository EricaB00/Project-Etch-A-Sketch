// Global
let color = "black";
let click = true;

//Draw Board
function drawBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let value = size * size;
  for (let i = 0; i < value; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquares);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
  }
}
drawBoard(16);

//Change Size
function changeSize(input) {

  if (input >= 2 && input <= 100) {
    document.querySelector('.error').style.display = 'none';
    drawBoard(input);
  } else {
    document.querySelector('.error').style.display = 'flex';
    console.log('Error')
  } 
}

//Color squares
function colorSquares(){
if (click) {
  if (color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}
}

//Change colors
function changeColor(choice) {
  color = choice;
}

//Reset
function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => (div.style.backgroundColor = 'white'));
}

// Click to start or stop drawing on board
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
   
}
});