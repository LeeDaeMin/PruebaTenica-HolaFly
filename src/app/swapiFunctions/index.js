
const fetch = require('node-fetch');

const getWeightOnPlanet = (mass, gravity) => {
    return mass * gravity;
}

const getLogs = (req, res) => { 

    
        /* Proceso de escritura de funcion */

    const dataGetLogs = {
        action : req.url,
        method : req.method,
        header : req.headers,
        ip : req.ip,
    }
    res.send(dataGetLogs);


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
