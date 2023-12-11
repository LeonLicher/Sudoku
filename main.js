import { solveSudoku } from "./solver.js";
import http from 'node:http';
import { generateSudoku } from "./generateSudoku.js";


const sudokuBoard = generateSudoku(81)
console.log(sudokuBoard)
const rawString = sudokuBoard.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');



const sol = solveSudoku(sudokuBoard);
// Format the solved Sudoku board vertically
const solString = sol.map(row => row.map(num => `<td>${num}</td>`).join('')).map(row => `<tr>${row}</tr>`).join('');

const htmlResponse = `
  <html>
    <head>
      <style>
      * {
        margin-bottom: 20px;
      }

      #difficulty {
        display: block;
      }
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
      <h1>Leon baut sein JS</h1>

      <label for="difficulty">Select a Difficulty (Number of empty fields to figure out!)</label>
      <select id="difficulty" display="block">
        <option value="easy">easy</option>
        <option value="mid">mid</option>
        <option value="hard">hard</option>
      </select>

      <table>${rawString}</table>
       
      <button onclick="displaySolution()">Toggle Solution</button>
       

      <table id="solutionTable" style="display: none;">${solString}</table>
        
        <script>
        function generateSudoku() {
          const sudokuBoard = document.getElementById('solutionTable');
          if (solutionTable.style.display === "none") {
            solutionTable.style.display = 'table'; // Show the solution table
          } else {
            solutionTable.style.display = "none"; // Hide the solution table
          }
        }



        function displaySolution() {
          const solutionTable = document.getElementById('solutionTable');
          if (solutionTable.style.display === "none") {
            solutionTable.style.display = 'table'; // Show the solution table
          } else {
            solutionTable.style.display = "none"; // Hide the solution table
          }
        }
        </script>

    </body>
  </html>
`;


const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.end(htmlResponse);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});








