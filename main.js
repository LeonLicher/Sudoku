import { solveSudoku } from "./solver.js";
import http from 'node:http';



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
const rawString = sudokuBoard.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');



const sol = solveSudoku(sudokuBoard);
// Format the solved Sudoku board vertically
const solString = sol.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');

const htmlResponse = `
  <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
        }
        td {
          border: 1px solid black;
          width: 30px; /* Adjust the width as needed */
          height: 30px; /* Adjust the height as needed */
          text-align: center;
        }
      </style>
    </head>
    <body>
      <table>${rawString}</table>
      <p><p>
      <button onclick="displaySolution()">Show Solution</button>
      <p><p>

      <table id="solutionTable" style="display: none;">${solString}</table>
      <script>
      function displaySolution() {
        const solutionTable = document.getElementById('solutionTable');
        if(solutionTable.style.display ==="none"){
        solutionTable.style.display = 'table'; // Show the solution table
        } else {
          solutionTable.style.display = "none" // unshow 
        }
      }
    </script>
      
    </body>
  </html>
`;

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlResponse);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});








