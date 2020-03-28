// Variable de peticiones a la base de datos:
const mongoose = require('mongoose');
// Creamos una variable para usar los metodos de schema:
let Schema = mongoose.Schema;

const sensorSchema = Schema({
    identification: "DTH11",
    name: "Sensor de Humedad y Temperatura",
    quantity: 1,
    descriptrion: "Sensor para medir la humedad y temperatura del ambiente",
    data: {
        temperatura: Number,
        humedad: Number
    },
    status: true
  });

  module.exports = mongoose.model('Sensore', sensorSchema);
