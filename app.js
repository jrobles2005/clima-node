const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Datos de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
/* lugar.getLugarLatLng(argv.direccion).then(console.log)
    .catch(err => console.log(err)); */

/* clima.getClima(40.750000, -74.000000).then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {




    try {
        let posicion = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(posicion.lat, posicion.lng)
        return `El clima de ${posicion.localidad} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);