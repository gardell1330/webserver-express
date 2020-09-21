const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 8088;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julio Garcia'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Julio Garcia'
    });
});

app.listen(port, () => {
    console.log(`Escuchando el ${port}`);
});