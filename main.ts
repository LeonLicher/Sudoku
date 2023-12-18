const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files using express.static for the "public" directory
app.use('/public', express.static(path.join(__dirname, 'Sudoku', 'public')));




// Serve JS files from "Sudoku/dist/public"
app.use('/Sudoku/dist/public/scripts.js', (req, res, next) => {
  const filePath = path.join(__dirname, 'Sudoku', 'dist', 'public', 'scripts.js');
  res.type('application/javascript');
  res.sendFile(filePath);
});

// Serve CSS files from "Sudoku/public"
app.use('/Sudoku/public/styles.css', (req, res, next) => {
  const filePath = path.join(__dirname, 'Sudoku', 'public', 'styles.css');
  res.type('text/css');
  res.sendFile(filePath);
});
// Serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Sudoku', 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
