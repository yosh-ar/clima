let axios = require('axios');

const GetLongL = async(pais) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=d8b7b4874dfb84390991f720ff60a6cf&units=metric`;
    let response = await axios.get(url);

    // return response;

    let respuesta = response.data;
    // return respuesta;
    const ciudad = respuesta.name;
    const lat = respuesta.coord.lat;
    const lon = respuesta.coord.lon;
    const clima = respuesta.main.temp;
    return {
        ciudad,
        lat,
        lon,
        clima
    }
}

module.exports = {
    GetLongL
}