const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,('temp/index.html')));
   
});

app.listen(3000, () => {
    console.log(`Sunucu ${port} portunda baslatildi ..`);
});