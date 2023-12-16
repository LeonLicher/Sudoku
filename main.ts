import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, '..', 'public')));

// Serve static files from the "dist/public" directory
app.use(express.static(join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send the index.html file from the "public" directory
  res.status(200).sendFile(join(__dirname, '..', 'public', 'index.html'));
});
app.get("/public/styles.css", (req, res) => {
    res.type("text/css");
    res.sendFile(path.join(__dirname, 'public', 'styles.css'));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
