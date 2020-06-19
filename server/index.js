const express = require('express')
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.resolve(__dirname, '..')))

app.listen(port, () => console.log(`Landing Page listening at http://localhost:${port}`))