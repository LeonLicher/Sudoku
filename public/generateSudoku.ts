function generateSudoku(numberOfZ) {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(0));
  
    function isValid(num, row, col) {
      for (let i = 0; i < 9; i++) {
        if (
          grid[row][i] === num ||
          grid[i][col] === num ||
          grid[row - (row % 3) + Math.floor(i / 3)][col - (col % 3) + (i % 3)] === num
        ) {
          return false;
        }
      }
      return true;
    }
  
    function solve() {
        const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
        shuffle(numbers);
      
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
              for (const num of numbers) {
                if (isValid(num, row, col)) {
                  grid[row][col] = num;
      
                  if (solve()) {
                    return true;
                  }
      
                  grid[row][col] = 0;
                }
              }
              return false;
            }
          }
        }
        return true;
      }
      
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
  
    // Generate a complete Sudoku puzzle
    solve();
  
    // Create a copy of the grid before removing numbers
    const puzzle = grid.map(row => row.slice());
  
    // Randomly remove some numbers to create an unfinished Sudoku puzzle
    if(numberOfZ>=82){throw new Error("Number greater than number of fields")}
    
    for (let i = 0; i < numberOfZ; i++) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if(puzzle[row][col] ===0 ){i--}
      puzzle[row][col] = 0;
    }
  
    return puzzle;
  }
  
  export { generateSudoku };
  