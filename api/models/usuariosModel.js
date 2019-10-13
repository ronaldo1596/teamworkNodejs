'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
	usuario: {
		type: String,
		required: 'El campo usuario es obligatorio',
	},
	passw: {
		type: String,
		default: '',
	},
	fechaRegistro: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);
