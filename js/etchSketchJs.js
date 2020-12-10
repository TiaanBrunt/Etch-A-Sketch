const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const resizeButton = document.querySelector(".resize");
const rainbowButton = document.querySelector(".rainbow");
const blackButton = document.querySelector(".black");
const eraserButton = document.querySelector(".eraser");
const annoucmentDiv = document.querySelector(".announcement");

let rainbow = false;
let eraser = false;
let annoucmentText = "";

clearButton.addEventListener('click', clearBoard);
resizeButton.addEventListener('click', resize);
rainbowButton.addEventListener('click', rainbowOn);
blackButton.addEventListener('click', blackOn);
eraserButton.addEventListener('click', eraserOn);

function rainbowOn(){
    rainbow = true;
    eraser = false;
    annoucmentText = "Rainbow";
}

function blackOn(){
    rainbow = false;
    eraser = false;
    annoucmentText = "Black";

}

function eraserOn(){
    eraser = true;
    annoucmentText = "Eraser";

}

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
        if(eraser){
            square.style.backgroundColor = 'white';
            document.getElementById("announcement").innerHTML = "Eraser Mode";
        }
        else if(rainbow){ 
            square.style.backgroundColor = ('RGB('+ (Math.floor(Math.random() * 255)) + "," + Math.floor(Math.random() * 255) + 
            "," + Math.floor(Math.random() * 255) + ")");
            document.getElementById("announcement").innerHTML = "Rainbow Mode";

        }
        else{
            square.style.backgroundColor = 'black';
            document.getElementById("announcement").innerHTML = "Black Mode";

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
    while(newBoardSize > 100){
        newBoardSize = window.prompt("Enter the number of squares per side of the board. Smaller than 100");
    }
    document.querySelectorAll('.square').forEach(square => square.remove());
    createBoard(newBoardSize);
    draw();
}

function start(){ 
    var boardSize = window.prompt("Enter the number of squares per side of the board");
    while(boardSize > 100){
        boardSize = window.prompt("Enter the number of squares per side of the board. Smaller than 100");
    }
    createBoard(boardSize);
}

start();
draw();

