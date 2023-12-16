import { colors } from "./script.js";

class ChessBoard {
    constructor(squareColors = ["white", "black"]) { // if no theme is chosen, the game will default to black and white
        this.squareColors = squareColors;
    }

    createBoard() {
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

        const gameBoardDiv = document.getElementById('game-board');

        const columnIDs = ["a", "b", "c", "d", "e", "f", "g", "h"];
        const rowIDs = [8, 7, 6, 5, 4, 3, 2, 1];

        // for every square of every row, create a chess square div and label it an ID and with light or dark
        let rowCount = 0; 
        for (const row of gameBoard) {
            // for every row, the id is labelled in descending order from 8 to 1
            const chessSquareID = [undefined, undefined];
            chessSquareID[1] = rowIDs[rowCount];

            let columnCount = 0;
            for (const square of row) { 
                const chessSquare = document.createElement("div");
                chessSquare.setAttribute("class", "square");

                if (square == 0) { // if 0 then light
                    chessSquare.setAttribute("class", "light");
                    chessSquare.style.backgroundColor = this.squareColors[0];
                } else { // else 1 then dark
                    chessSquare.setAttribute("class", "dark");
                    chessSquare.style.backgroundColor = this.squareColors[1];
                }

                // for every column, the id is labelled in ascending order from a to h
                chessSquareID[0] = columnIDs[columnCount];
                chessSquare.setAttribute("id", `${chessSquareID[0]}${chessSquareID[1]}`); // id is set to letternumber (ex. a1)
                chessSquare.innerText = `${chessSquareID[0]}${chessSquareID[1]}`; // call

                gameBoardDiv.appendChild(chessSquare);
                columnCount++;
            }
            rowCount++;
        }
    }
}

export function gameStart() {
    const newChessBoard = new ChessBoard(colors);
    newChessBoard.createBoard();
}