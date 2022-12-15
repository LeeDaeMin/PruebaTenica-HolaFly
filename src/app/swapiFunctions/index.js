
const fetch = require('node-fetch');

const getWeightOnPlanet = (mass, gravity) => {
    return mass * gravity;
}

const getLogs = async (action, header, ip) => {
    /* 
        funcion que me permita guardar las consultas a la API
    */

        const {} = await genericRequest('http://localhost:3000/logs', 'POST', {
            action,
            header,
            ip
        }, true);

}

const genericRequest = async (url, method, body, logging = false) => {
    let options = {
        method: method
    }
    if(body){
        options.body = body;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if(logging){
        console.log(data);
    }
    
    return data;
}

module.exports = {
    getWeightOnPlanet,
    genericRequest,
    getLogs
}
