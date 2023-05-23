/* javascript.js */

document.addEventListener("DOMContentLoaded", function(){
     createBoard(16);
})

function createBoard(size){
    let board = document.querySelector(".board");
    board.getElementsByClassName.grigTemplateColumns = `repeat(${size},1fr)`;
    board.getElementsByClassName.grigTemplateRows = `repeat(${size},1fr)`;
}

let numDivs = size * size;

for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", div);
}