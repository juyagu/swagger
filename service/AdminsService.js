'use strict';
var Conexion = require('./../connection/connectionPool.js'); 

/**
 * agregar un nuevo aluimno
 * Agregar un nuevo alumno al listado
 *
 * alumnoItem AlumnoItem Nuevo Alumno para agregar (optional)
 * no response value expected for this operation
 **/
exports.nuevoAlumno = function(alumnoItem) {
  return new Promise(function(resolve, reject) {
    //resolve({code:200,message:'Ok'});
    var sqlQuery = "insert into alumnos set ?";
    Conexion.execute(sqlQuery,alumnoItem).then(function(response){
      Conexion.getConexionesAbiertas().then(function(response){
        
      })
      resolve(response);
    }).catch(function(connection,error){
      reject({code:500,payload:error});
    })
  });
}

