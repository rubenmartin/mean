// we force the value on the env.NODE_ENV by default to development

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Initial cnfguration  for express and mongoose

var mongoose = require('./config/mongoose'),  
			express = require('./config/express');
var db = mongoose();
var app = express();
app.listen(3000);
module.exports = app;

console.log('Servidor Ejecutandose en local en el puerto 3000');



// var express = require('express');
// var app = express();

// app.use('/' , function(req,res){
// 	res.send('Hola Mundo');
// });

// app.listen(3000);

// console.log('ejecustnadoes servidor puerto 3000');

// module.exports = app;

	
	