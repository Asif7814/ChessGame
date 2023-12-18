// IMPORTS
import { colors } from "./script.js"; // will import colors from another folder

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
        chessSquareDiv.setAttribute("class", "squares");
        chessSquareDiv.setAttribute("class", this.colorClass);
        chessSquareDiv.setAttribute("square-id", `${this.columnID}${this.rowID}`); // sets a position id for each square (a1)
        chessSquareDiv.style.backgroundColor = this.color;
        gameBoardDiv.appendChild(chessSquareDiv);

        // PROBLEM: THIS DOESN'T SEEM TO GET ADDED TO THE NODELIST MEANING I CAN'T ACCESS THE DATA AFTERWARDS (EX. FOR RETRIEVING POSITIONS, IF IT'S OCCUPIED, ETC.)
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

    let chessSquares = document.querySelectorAll(".squares");

    console.log(chessSquares);
}

let gameBoardDiv = document.querySelector("#game-board");

startGame();

// A CLASS FOR CHESSBOARD MAY STILL BE NEEDED LATER