const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (request, response) => {
    app.use(express.static(path.join(__dirname, '../build')));
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
});