// import { colors } from "./script.js";

class ChessSquare { 
    constructor(e, columnID, rowID, colors = ["white", "black"], isOccupied = false) { // e = element from gameboard array
        this.columnID = columnID;
        this.rowID = rowID;
        this.isOccupied = isOccupied;

        this.colorClass = e === 0 ? "light" : "dark";
        this.color = this.colorClass == "light" ? colors[0] : colors[1];
    }

    createSquareDiv() { 
        const chessSquareDiv = document.createElement("div");
        chessSquareDiv.setAttribute("class", "square");
        chessSquareDiv.setAttribute("class", this.colorClass);
        chessSquareDiv.setAttribute("square-id", `${this.columnID}${this.rowID}`);
        chessSquareDiv.style.backgroundColor = this.color;
        gameBoardDiv.appendChild(chessSquareDiv);
    }
}

function startGame() { 
    const gameBoard = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
    ];

    const columnIDs = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const rowIDs = [8, 7, 6, 5, 4, 3, 2, 1];

    for (let i = 0; i < gameBoard.length; i++) { // for every row of the gameboard 2d array and
        for (let j = 0; j < gameBoard[i].length; j++) { // for every square of every row, create a new chessSquare object
            let chessSquareObj = new ChessSquare(gameBoard[i][j], columnIDs[j], rowIDs[i], colors); // pass in: current element/square, columnID, rowID
            chessSquareObj.createSquareDiv();
        }
    }
}

// let colors = ["#eff4f9", "#acc4e3"]; // blue and light blue
let colors = ["#769656", "#eeeed2"]; // green and yellow
let gameBoardDiv = document.querySelector("#game-board");

startGame();

console.log(gameBoardDiv); // nodelist does print to the console

// gameBoardDiv = document.querySelector("#game-board"); // this updates the nodelist (I think)


// A CLASS FOR CHESSBOARD MAY STILL BE NEEDED LATER
// export function gameStart() {
//     const newChessBoard = new ChessBoard(colors);
//     newChessBoard.createBoard();
// }