// cargar paquete de express
const express = require('express');
// paquete hbs para renderizar paginas
var hbs = require('hbs');
// declaracion variable para poder utilizar express
const app = express();
// llamada a los helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//// se usa como middleware para todos los servicos, todos pasan por la funcion o callback
app.use(express.static(__dirname + '/public'));

// uso libreria hbs para renderizar paginas del servicio
hbs.registerPartials(__dirname + '/views/parciales');
app.set('vista server hbs', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: "Manuel"
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port} `);
});