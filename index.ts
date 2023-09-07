const readline = require("readline");
import TicTacToe from "./tictactoe";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new TicTacToe();
// Display the game board
function printBoard(): void {
  console.clear();
  // Print the board and current player
  console.log("Tic-Tac-Toe\n");
  const board = game.board;
  for (let i = 0; i < 9; i += 3) {
    console.log(` ${board[i]} | ${board[i + 1]} | ${board[i + 2]}`);
    if (i < 6) {
      console.log("-----------");
    }
  }
  console.log("\nCurrent player:", game.currentPlayer);
}
// Prompt the current player for a move

function promptPlayer(): void {
  rl.question("Enter a number (0-8): ", (input) => {
    const position = parseInt(input);
    if (isNaN(position) || position < 0 || position > 8 || game.board[position] !== "") {
      console.log("Invalid move. Try again.");
      promptPlayer();
    } else {
      game.makeMove(position);
      if (game.isGameWon()) {
        printBoard();
        console.log(`Player ${game.currentPlayer === "X" ? "O" : "X"} wins!`);
        rl.close();
      } else if (game.isBoardFull()) {
        printBoard();
        console.log("It's a draw!");
        rl.close();
      } else {
        printBoard();
        promptPlayer();
      }
    }
  });
}

printBoard();
promptPlayer();
