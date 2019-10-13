'use strict';

var mongoose = require('mongoose'),
	Usuario = mongoose.model('Usuarios');

exports.listUsuarios = function(req, res) {
	Usuario.find({}, function(err, usuario) {
		if (err) res.send(err);
		res.json(usuario);
	});
};

exports.createUsuario = function(req, res) {
	var nuevoUsuario = new Usuario(req.body);
	nuevoUsuario.save(function(err, usuario) {
		if (err) res.send(err);
		res.json(usuario);
	});
};

exports.readUsuario = function(req, res) {
	Usuario.findById(req.params.id, function(err, usuario) {
		if (err) res.send(err);
		res.json(usuario);
	});
};

exports.updateUsuario = function(req, res) {
	Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, usuario) {
		if (err) res.send(err);
		res.json(usuario);
	});
};

exports.deleteUsuario = function(req, res) {
	Usuario.remove(
		{
			_id: req.params.id,
		},
		function(err, usuario) {
			if (err) res.send(err);
			res.json({ message: 'Usuario borrado correctamente' });
		}
	);
};
