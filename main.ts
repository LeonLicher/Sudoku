import express from 'express';
import path from 'path';

const port = 8080;
const app = express();

const currentModuleURL = new URL(import.meta.url);
const currentModulePath = path.dirname(currentModuleURL.pathname);

const publicPath = path.join(currentModulePath, 'public');
// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Define routes
app.get('/', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    res.status(200).sendFile(indexPath);
});

app.get('/Sudoku', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    res.status(200).sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
