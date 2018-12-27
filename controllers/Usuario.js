'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.obtenerAlumnos = function obtenerAlumnos (req, res, next) {
  var searchString = req.swagger.params['searchString'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Usuario.obtenerAlumnos(searchString,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response,response.code);
    });
};
