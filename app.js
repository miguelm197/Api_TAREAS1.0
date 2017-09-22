
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');


// Conexión a la Base de Datos
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds147274.mlab.com:47274/bdtareas', function (err, res) {
    if (err) throw err;
    console.log('Conectado a la Base de Datos');
});

// Definimos App como la función del módulo Express
var App = express();

// Definimos algunas variables que usaremos en las distintas funciones
var port = process.env.PORT || 3000;
var options = {
  root: __dirname
};

// Definimos funciones para luego usarlas al recibir una petición en el router
function getHTML(req, res) {
  res.sendFile('./index.html', options, (err) => {
    if (err) throw err;
    console.log('Sirviendo index.html')
  })
};

// Definimos las rutas
App.get('/', getHTML);

// Escuchamos el puerto de Express
App.listen(port, function () {
  console.log('Aplicacion escuchando en el puerto: ' + port)
});