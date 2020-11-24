const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', clearBoard);

function createBoard(){
    for(let i = 0; i < 16; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

function draw(){
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
    }) )
}

function clearBoard(){
    let allSquares = document.querySelectorAll(".square");
    for(let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = "white";
    }
}



createBoard();
draw();

