
const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
        
    });



    server.get('/hfswapi/getPeople/:id', async (req, res) => {

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
        

    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const {name, gravity} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planets/${req.params.id}`, 'GET', null, true);
        const datagetPlanet = {
            name,
            gravity
        }
        res.send(datagetPlanet);
        /* Guardar en una variable el historial de las peticiones realizadas  */
        app.swapiFunctions.getLogs(req, res);
        
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {    


            const peopleId = Math.floor(Math.random() * 82) + 1;
            const planetId = Math.floor(Math.random() * 60) + 1;

            const {name: person_name, mass: person_mass, height: person_height, homeworld: person_homeworld} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${peopleId}`, 'GET', null, true);
            const {name: planet_name, gravity: planet_gravity} = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planets/${planetId}`, 'GET', null, true);

            const weight = app.swapiFunctions.getWeightOnPlanet(person_mass, planet_gravity);

            if(person_homeworld === `https://swapi.dev/api/planets/${planetId}/`){
                res.send('Error: El personaje se encuentra en su planeta natal');
            }else{

                const dataGetWeightOnPlanetRandom = {
                    person_name,
                    person_mass,
                    person_height,
                    person_homeworld,
                    planet_name,
                    planet_gravity,
                    weight
                }
                res.send(dataGetWeightOnPlanetRandom);
            }

    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        
    });


}


module.exports = applySwapiEndpoints;
