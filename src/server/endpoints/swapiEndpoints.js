
const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
        
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {

        const {name, mass, height, homeworld} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${req.params.id}`, 'GET', null, true);
        const {name: homeworld_name, url: homeworld_id} = await app.swapiFunctions.genericRequest(homeworld, 'GET', null, true);

        const data = {
            name,
            mass,
            height,
            homeworld_name,
            homeworld_id
        }
        
        res.send(data);

    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const {name, gravity} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planets/${req.params.id}`, 'GET', null, true);
        const data = {
            name,
            gravity
        }
        res.send(data);
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {    
            
            const peopleId = Math.floor(Math.random() * 82) + 1;
            const planetId = Math.floor(Math.random() * 61) + 1;
    
            const {name: planet_name, gravity: planet_gravity} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planets/${planetId}`, 'GET', null, true);
            const {name: people_name, mass: people_mass} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${peopleId}`, 'GET', null, true);
    
            const data = {
                planet_name,
                planet_gravity,
                people_name,
                people_mass
            }
            res.send(data);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;