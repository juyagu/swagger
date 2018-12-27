'use strict';
var Conexion = require('./../connection/connectionPool.js'); 
var Q = require("q");

/**
 * obtener alumnos
 * Obtener el listado de alumnos 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.obtenerAlumnos = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var sqlQuery = "select * from alumnos";
    Conexion.execute(sqlQuery).then(function(response){
      Conexion.getConexionesAbiertas().then(function(response){
        
      })
      resolve(response);
    }).catch(function(connection,error){
      reject({code:500,payload:error});
    })
    //console.log(Conexion.execute(sqlQuery));

    /*var examples = {};
    examples['application/json'] = [ {
  "curso" : "PHP",
  "apellido" : "Perez",
  "id" : 12,
  "nombre" : "Jose"
}, {
  "curso" : "PHP",
  "apellido" : "Perez",
  "id" : 12,
  "nombre" : "Jose"
} ];*/

    /*if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }*/
  });
}

