// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3333;

// Impostazione del percorso per i file statici (CSS, immagini, ecc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale per servire index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

