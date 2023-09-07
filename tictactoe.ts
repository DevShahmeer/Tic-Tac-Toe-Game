class TicTacToe {
    board: string[] = ["", "", "", "", "", "", "", "", ""];
    currentPlayer: string = "X";

    // Make a move on the board
    makeMove(position: number): void {
      if (this.board[position] === "" && !this.isGameWon()) {
        this.board[position] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    }
    // Check if the game is won
    isGameWon(): boolean {
      // Check if the board is full (a draw)
      const winPatterns: number[][] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          return true;
        }
      }
  
      return false;
    }
  
    isBoardFull(): boolean {
      return this.board.every(cell => cell !== "");
    }
    // Reset the game board
    resetGame(): void {
      this.board = ["", "", "", "", "", "", "", "", ""];
      this.currentPlayer = "X";
    }
  }
  
  export default TicTacToe;
  