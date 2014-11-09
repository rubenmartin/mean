module.exports = function(app){
	var index = require('../controllers/index.server.controller');

	var copia = require('../controllers/index.server.controller');

	app.get('/', index.render);

	app.get('/copia', copia.render);
};