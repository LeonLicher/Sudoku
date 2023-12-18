import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 8080;
// Serve static files using express.static for the "public" directory
app.use('/public', express.static(join(__dirname, 'public')));
// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
