import express from "express";
import path, { dirname } from "path";
import * as url from 'url';

const app = express();
const port = 8080;

// Get the directory path of the current module
const currentModulePath = url.fileURLToPath(import.meta.url);
const __dirname = dirname(currentModulePath);

// Resolve the absolute path for the public directory
const publicPath = path.resolve(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define a route for the root URL
app.get("/", (req, res) => {
    // Send the index.html file from the parent directory
    res.status(200).sendFile(path.join(__dirname, '..', 'public', "index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
