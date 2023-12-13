import { solveSudoku } from "./public/solver.js";
import http from 'node:http';
import { generateSudoku } from "./public/generateSudoku.js";
import express, { Router, raw } from "express";
import path from 'path';  // Add this line to import the path module

const router = express.Router();

const port = 8080;
let app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.statusCode(200)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/Sudoku', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
