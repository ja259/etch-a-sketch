/* javascript.js */

document.addEventListener("DOMContentLoaded", function(){
     createBoard(16);
})

function createBoard(size){
    let board = document.querySelector(".board");
    board.getElementsByClassName.grigTemplateColumns = `repeat(${size},1fr)`;
    board.getElementsByClassName.grigTemplateRows = `repeat(${size},1fr)`;
}