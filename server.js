const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // para hacer público un directorio
//app.set('views', path.join(__dirname + '/public/views')); // para cuando la carpeta views esta dentro de public

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'lenin adolfo misle bustos'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

//Escuchando en el puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto:${ port }`);
});