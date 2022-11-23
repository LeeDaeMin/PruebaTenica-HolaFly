const loggingMiddleware = require('./loggingMiddleware');

const applyMiddlwares = (server, app) => {
    server.use(loggingMiddleware(app.db));
	return server;
};

module.exports = applyMiddlwares;