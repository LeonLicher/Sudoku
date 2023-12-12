import { solveSudoku } from "./public/solver.js";
import http from 'node:http';
import { generateSudoku } from "./public/generateSudoku.js";
import express, { raw } from "express";
import path from 'path';  // Add this line to import the path module

// const sudokuBoard = generateSudoku(50);
// const rawString = sudokuBoard.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');
// console.log(rawString)


// const sol = solveSudoku(sudokuBoard);
// Format the solved Sudoku board vertically
// const solString = sol.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');

const router = express.Router();

const port = 8080;
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.statusCode(200)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
