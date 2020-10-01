const axios = require('axios').default;

const getClima = async(lat, lng) => {
    //const encodeUrl = encodeURI(direccion);

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e08cefbe6d276b2081d9504c55d777e3&units=metric`);

    if (Object.keys(resp.data).length === 0) {
        throw new Error(`no hay resultados para esas coordenada:lat- ${lat}, lng- ${lng}`)
    }

    /* const data = resp.data.address;
    const localidad = data.locality;
    const lat = data.lat;
    const lng = data.lng; */

    return resp.data.main.temp


}

module.exports = {
    getClima
}