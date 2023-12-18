function solveSudoku(board: number[][]) {
    const size = 9;
  
    function isValid(num: number, row: number, col: number) {
      // Check if 'num' is not present in the current row, column, and 3x3 grid
      for (let i = 0; i < size; i++) {
        if (
          board[row][i] === num ||
          board[i][col] === num ||
          board[row - (row % 3) + Math.floor(i / 3)][col - (col % 3) + (i % 3)] === num
        ) {
          return false;
        }
      }
      return true;
    }
  
    function solve() {
      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= size; num++) {
              if (isValid(num, row, col)) {
                board[row][col] = num;
  
                if (solve()) {
                  return true; // If the current configuration leads to a solution
                }
  
                // If the current configuration doesn't lead to a solution, backtrack
                board[row][col] = 0;
              }
            }
            return false; // If no number can be placed at this cell
          }
        }
      }
      return true; // If the entire board is filled
    }
  
    if (solve()) {
      return board; // Return the solved Sudoku board
    } else {
      return "No solution exists."; // Return a message if no solution exists
    }
  }
  

  export {solveSudoku }
  