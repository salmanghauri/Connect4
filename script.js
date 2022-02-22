/// pseudocode:
/// dynamic variables////
const players = {
    player1: {
        name: "",
        turn: true,
        text: "P1",
    },
    player2: {
       name: "",
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
let display = document.querySelector('h2');
let winner = "";
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
     players.player2.turn = false;
     display.innerText = "";
     winner = "";
     
};
///event listener//
gameSlots.forEach(function (idx) {
    if (idx.id.charAt(0) == 0 ) {
        idx.addEventListener('click', moveMade);
    }
});
initialize();
function initialize() {
    players.player1.name = prompt("Player 1 enter your name, you will be red") || "Player 1";
    players.player2.name = prompt("Player 2 enter your name, you will be yellow") || "Player 2";
    resetGame();
}
function moveMade(event) { 
    if (winner) return;
    console.log(event.target.id);
    let gameSlot = event.target;
    let [row, column] = gameSlot.id.split('-');
    column = parseInt(column);
    if (gameSlot.style.backgroundColor !== "white") {
        alert('try another Slot!');
        return;
    }
    if (players.player1.turn === true) {
        for ( let i=3; i >= 0; i--) {
            console.log(gameSlots[column + (i*4)]);
            if (gameSlots[column + (i*4)].style.backgroundColor == "white") {
                gameSlots[column + (i*4)].style.backgroundColor = "red"
                moves.connect4Board [i] [column] = players.player1.text;
                console.log(moves.connect4Board);
                break;
            }
            
        }   
        winner = checkWinner(players.player1.text);
        if (winner) {
            display.innerText = `${players.player1.name} Wins, Press Reset to Play Again`;
            return;

        }
        else {
            players.player1.turn = false;
            players.player2.turn = true;
            console.log(players.player1.turn);
        }
    }
    else {
        for ( let i=3; i >= 0; i--) {
            console.log(column);
            if (gameSlots[column + (i*4)].style.backgroundColor == "white") {
                gameSlots[column + (i*4)].style.backgroundColor = "yellow"
                moves.connect4Board [i] [column] = players.player2.text;
                console.log(moves.connect4Board);
                break;
            }
        }
        winner = checkWinner(players.player2.text);
        if (winner) {
            display.innerText = `${players.player2.name} Wins, Press Reset to Play Again`;
            return;
        }
        else { 
            players.player2.turn = false;
            players.player1.turn = true;
            console.log(players.player2.turn);
        }
            
    }
}
function checkWinner(player) {
    for (let row=0; row <4; row++) {
        if (moves.connect4Board[row][0]===player && moves.connect4Board[row][1]===player && moves.connect4Board[row][2]===player && moves.connect4Board[row][3]===player) {
            return player;
        }
    }
    for (let col=0; col<4; col++){
        if (moves.connect4Board[0][col]===player && moves.connect4Board[1][col]===player && moves.connect4Board[2][col]===player && moves.connect4Board[3][col]===player) {
            return player;
        }
    }
    if (moves.connect4Board[0][0]===player && moves.connect4Board[1][1]===player && moves.connect4Board[2][2]===player && moves.connect4Board[3][3]===player) {
        return player;
    }
    else if (moves.connect4Board[3][0]===player && moves.connect4Board[2][1]===player && moves.connect4Board[1][2]===player && moves.connect4Board[0][3]===player) {
        return player;
    }
}

