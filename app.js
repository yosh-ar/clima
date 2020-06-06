const { GetLongL } = require('./peticion/http')


let argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'dirección del a ciudad para obtener el clima'
    }
}).argv;


let pais = encodeURI(argv.direccion);

GetLongL(pais).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error.data);
});