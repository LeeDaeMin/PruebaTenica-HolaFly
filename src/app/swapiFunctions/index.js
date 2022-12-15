const fetch = require('node-fetch');

const getWeightOnPlanet = (mass, gravity) => {
    return mass * gravity;
}

const getLogs = async (req, res) => {
    const {name, mass, height, homeworld} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${req.params.id}`, 'GET', null, true);
    const {name: homeworld_name, url: homeworld_id} = await app.swapiFunctions.genericRequest(homeworld, 'GET', null, true);

    const dataGetPeople = {
        name,
        mass,
        height,
        homeworld_name,
        homeworld_id
    }

    res.send(dataGetPeople);

    return dataGetPeople;
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
    genericRequest
}