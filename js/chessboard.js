// IMPORTS
import { colors } from "./script.js"; // will import colors from another file

class ChessSquare { 
    constructor(e, columnID, rowID, colors = ["white", "black"], isOccupied = false) { // e = element from gameboard array, isOccupied has no use case for now, will be used later
        this.columnID = columnID;
        this.rowID = rowID;

        this.colorClass = e === 0 ? "light" : "dark";
        this.color = this.colorClass == "light" ? colors[0] : colors[1];
    }

    createSquareDiv() { 
        const chessSquareDiv = document.createElement("div");
        chessSquareDiv.setAttribute("class", `squares ${this.colorClass}`); // sets class of "squares" and "light" or "dark"
        chessSquareDiv.setAttribute("square-id", `${this.columnID}${this.rowID}`); // sets a position id for each square (a1)
        chessSquareDiv.style.backgroundColor = this.color;
        gameBoardDiv.appendChild(chessSquareDiv);
    }
}

function createChessboard() { 
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
            const chessSquareObj = new ChessSquare(gameBoard[i][j], columnIDs[j], rowIDs[i], colors); // pass in: current element/square, columnID, rowID
            chessSquareObj.createSquareDiv();
        }
    }
}

let gameBoardDiv = document.querySelector("#game-board");

createChessboard();

let selectedSquareID;

function retrieveID(e) { 
    if (e.target.matches(".squares")) {
        let square = e.target;
        selectedSquareID = square.getAttribute("square-id"); // can i return this and capture it into a variable to use later?
        console.log(selectedSquareID);
    }
}

gameBoardDiv.addEventListener("click", retrieveID);

// console.log(selectedSquareID);

// A CLASS FOR CHESSBOARD MAY STILL BE NEEDED LATER