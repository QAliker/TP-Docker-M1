const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Application démarrée sur le port ${port}`);
});