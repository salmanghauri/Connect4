/// pseudocode:
/// dynamic variables////
const players = {
    player1: {
        image: document.querySelector('#redpiece'),
        turn: true,
        text: "P1",
    },
    player2: {
       image: document.querySelector('#yellowpiece'),
       turn: false,
       text: "P2",
    },
};
let moves = {
    connect4Board: [
    ['','','', ''],
    ['','','', ''],
    ['','','', ''],
    ['','','', ''],
 ],
};
///constants///
let gameBoard = document.querySelector('table');
let gameSlots = document.querySelectorAll('td');
const resetButton = document.querySelector('#resetButton');
const redGamePiece = document.querySelector('#redpiece');
const yellowGamePiece = document.querySelector('#yellowpiece');
///reset button///
resetButton.addEventListener("click", resetGame);
function resetGame () {
    console.log(gameSlots);
    gameSlots.forEach(function (slot) {
        slot.innerHTML = ''
        slot.style.backgroundColor = "white";
    });
    moves.connect4Board = [
        ['','','', ''],
        ['','','', ''],
        ['','','', ''],
        ['','','', ''],
     ],
     players.player1.turn = true;
     players.player1.turn = false;
};
///eventlistener for click on slot///
gameBoard.addEventListener('click', moveMade);
function moveMade(event) {
    console.log(event.target.id);
    let gameSlot = event.target;
    if (gameSlot.innerHTML) {
        alert('try another Slot!');
        return;
    }
    if (players.player1.turn === true) {
        gameSlot.style.backgroundColor = "red";
        const [row, column] = gameSlot.id.split('-');
        moves.connect4Board [row] [column] = players.player1.text;
        console.log(moves.connect4Board);
        let winner = checkWinner(players.player1.text);
        if (winner) {
            document.querySelector('h1').innerText = "Player 1 Wins"
            resetGame();
        }
        else {
            players.player1.turn = false;
            players.player2.turn = true;
        }
    }
    else {
        gameSlot.style.backgroundColor = "yellow";
        const [row, column] = gameslot.id.split('-');
        moves.connect4Board [row] [column] = players.player2.text;
        console.log(moves.connect4Board);
        let winner = checkWinner(players.player2.text);
        if (winner) {
            document.querySelector('h1').innerText = 'Player 2 Wins';
            resetGame();
        }
        else { 
            players.player1.turn = true;
            players.player2.turn = false
        }
            
    }
}
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

