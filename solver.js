function solveSudoku(board) {
    const size = 9;
  
    function isValid(num, row, col) {
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
  
  // Example Sudoku board (0 represents empty cells)
  const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
  
  const solvedSudoku = solveSudoku(BoardArrayofArraysForLine);
  console.log(solvedSudoku);
  

  export {solveSudoku }
  