'use strict';
module.exports = function(app) {
	var usuariosList = require('../controllers/usuariosController');

	// todoList Routes
	app.route('/usuarios')
		.get(usuariosList.listUsuarios)
		.post(usuariosList.createUsuario);

	app.route('/usuarios/:id')
		.get(usuariosList.readUsuario)
		.put(usuariosList.updateUsuario)
		.delete(usuariosList.deleteUsuario);
};
