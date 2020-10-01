const axios = require('axios').default;

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const resp = await axios.get(`http://api.geonames.org/geoCodeAddressJSON?q=${encodeUrl}&country=ES&username=jrobles2005`);

    if (Object.keys(resp.data).length === 0) {
        throw new Error(`no hay resultados para ${direccion}`)
    }
    const data = resp.data.address;
    const localidad = data.locality;
    const lat = data.lat;
    const lng = data.lng;

    return {
        localidad,
        lat,
        lng

    }


}

module.exports = {
    getLugarLatLng
}