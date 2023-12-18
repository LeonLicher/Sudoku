// A function that returns the result for the entire sudoku board.
function isValid(board: any[][]) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if(!(value>0 && value <= 9 ))return false;

            if (value !== 0) {
                if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) || !validBox(board, i, j, value)) {
                    return false;
                }
            }
        }
    }
    return true;
}

// The row function.
function validRow(board: any[][], row: number, col: number, value: any) {
    // j represents on column
    for (let j = 0; j < 9; j++) {
        // check if the current column matches the passed-in column
        if (j !== col) {
            if (board[row][j] === value) {
                return false;
            }
        }
    }

    return true;
}

// The column function.
function validColumn(board: number[][] , row: number, col: number, value: any) {
    // i represents on row
    for (let i = 0; i < 9; i++) {
        // check if the current row matches the passed-in row
        if (i !== row) {
            if (board[i][col] === value) {
                return false;
            }
        }
    }

    return true;
}

// The sub-boxes function.
function validBox(board: any[][], row: number, col: number, value: any) {
    const startRow = row - (row % 3),
        startCol = col - (col % 3);

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (i !== row || j !== col) {
                if (board[i][j] === value) {
                    return false;
                }
            }
        }
    }

    return true;
}

export { isValid };
