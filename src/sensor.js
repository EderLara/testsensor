'use strict';
// Librerías:
const agendas = require('agenda');
const momento = require('moment');

// Variables: 
let ahora = momento();
let agenda = new agendas();
let Sensor = require('./datasensor');
let info = dataRand();
// Aleatorios:

agenda.define('DataRandom', async function(){
    let temp = Array(27,28,26,27.5,27,28.2,26.6,25.9,25.5,26.4);
    let hume = Array(60,61,59,58,62,60,59,57,63,64);
    // Aleatorio de temperatura:
    tempres = Math.floor(Math.random() * (temp.length));
    temperatura = temp(tempres);
    // trace(temperatura);
    // Aleatorio de humedad:
    humeres = Math.floor(Math.random() * (hume.length));
    humedad = hume(humeres);
    console.log(temperatura+' '+humedad);
    var { datos } = { "temperatura": temperatura, "humedad": humedad }
    let sensor = new Sensor;
        sensor.data = datos;
        sensor.save((err, datasaved)=>{
            if (err) return res.status(500).send({ msj: "Error al guardar" });
            if (!datasaved) return res.status(404).send({ msj: "No se guardaron los datos" });
            console.log(datasaved)
        });
});

agenda.on('ready', ()=>{
    agenda.every('3 seconds', 'DataRandom');
    agenda.start();
    console.log('Trabajando');
})

// Impresiones:
