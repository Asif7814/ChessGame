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

        for (const row of gameBoard) {
            for (const square of row) { // for every square of every row, create a chess square div and label it with light or dark
                const chessSquare = document.createElement("div");
                chessSquare.setAttribute("class", "square");

                if (square == 0) { // if 0 then light
                    chessSquare.setAttribute("class", "light");
                    chessSquare.style.backgroundColor = this.squareColors[0];
                } else { // else 1 then dark
                    chessSquare.setAttribute("class", "dark");
                    chessSquare.style.backgroundColor = this.squareColors[1];
                }

                gameBoardDiv.appendChild(chessSquare);
            }
        }
    }
}

function gameStart() {
    // colors temporarily placed in this file; will eventually have to move this to some menu/user-options file,
    let colors = ["lightyellow", "green"]; //  this way, I am able to dynamically change the colors of the board (allow the user to pick from a group of themes)

    const newChessBoard = new ChessBoard(colors);
    newChessBoard.createBoard();
}

gameStart();