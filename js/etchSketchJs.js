const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const resizeButton = document.querySelector(".resize");

clearButton.addEventListener('click', clearBoard);
resizeButton.addEventListener('click', resize);

function createBoard(size){
    let squareSize = 480 / size;
    for(let i = 0; i < size * size; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    }
}

function draw(){
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.addEventListener('mouseover', () => {
        if(square.style.backgroundColor != 'black'){
        square.style.backgroundColor = 'black';
        }
        else{
            //square.style.backgroundColor = 'white';
        }
    }) )
}

function clearBoard(){
    let allSquares = document.querySelectorAll(".square");
    for(let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = "white";
    }
}

function resize(){
    clearBoard;
    var newBoardSize = window.prompt("Enter the number of squares per side of the board");
    resetDivs();
    createBoard(newBoardSize);
    draw();
}

function resetDivs(){
    document.querySelectorAll('.square').forEach(e => e.remove());
}

function start(){ 
    var boardSize = window.prompt("Enter the number of squares per side of the board");
    createBoard(boardSize);
}

start();
draw();

