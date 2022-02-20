/// pseudocode:
/// need an array of items like tic-tac-toe
const players = {
    player1: {
        image: document.querySelector('#redpiece'),
        turn: true,
    },
    player2: {
       image: document.querySelector('#yellowpiece'),
       turn: false;
    },
};
let choices = {
    connect4Board: [
    ['','',''],
    ['','',''],
    ['','',''],
    ['','',''],
 ],
};
///constants///
const gameSlots = document.querySelectorAll('td');
const resetButton = document.querySelector('.resetButton');
const redGamePiece = document.querySelector('#redpiece');
const yellowGamePiece = document.querySelector('#yellowpiece'),
/// array this time checks a 6x7 grid for four in a row
    //function will check diagonal, horizontal, vertical
    /// starting with a 4x4 grid then building up from there
/// need a function on click, but it fills the EMPTY spot
/// so will need to find a way to ensure that the empty slot is filled only in the row
    /// can just handle each cell seperately
    /// ERROR MESSAGE IF CLICKED OCCUPIED CELL
/// need to code a reset button

    //empties all cells
    //adds event listener to button 
    //resets turns and player messages
/// put reset in right after a winner is declared

