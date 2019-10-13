var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/usuariosModel'), //created model loading here
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_w9wq7rmq:t2i5uegr56i9usedbe0aucjo57@ds333238.mlab.com:33238/heroku_w9wq7rmq');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/usuariosRoutes'); //importing route
routes(app); //register the route

//MiddleWare
app.use(function(req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' });
});
app.listen(port);

console.log('API Empresarial iniciada' + port);
