/*
Next Up:
- retrieve position of a clicked square

Completed: 
- created chessboard 8x8 with alternating colors (light and dark | default: black and white)
- Labelled each square with a position id (letter-number (ex. a1, b5, h8, d3, etc.)

Components:
- Chessboard; create board, keep track of player's positions on the board, the boundaries, etc.
- Results (determine a win, draw, or loss)
- Player; to keep track of each player's color and score
- Individual classes for each chess piece; what each chess piece is able to do
*/

// FOR PIECES THE FOLLOWING KEYS WILL BE NEEDED: POSITION, COLOR, PLAYER, TYPE

// IMPORTS
// import { startGame } from "./chessboard.js";

// EXPORTS
// colors temporarily available in this file; eventually put into some kind of start-menu file (or I make this script.js into the start-menu)
// this way, I am able to dynamically change the colors of the board (allow the user to pick from a group of themes)
// let colors = ["#eff4f9", "#acc4e3"]; // ice blue and white

export let colors = ["#769656", "#eeeed2"]; // green and lightyellow

// FUNCTION CALLS
// startGame();
