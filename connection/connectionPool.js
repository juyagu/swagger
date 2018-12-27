const mysql = require('mysql');
var mysql_pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cuv'
});

var ConexionMysql = function () {
    this.execute = function (query, sqlParams) {
        if(typeof sqlParams === 'undefined'){
            sqlParams = [];
        }
        return new Promise(function (resolve, reject) {
            mysql_pool.getConnection(function (err, connection) {
                if (err) {
                    console.log('Ocurrió un error');
                    //throw error;
                    reject(connection, error);
                }
                connection.query(query,sqlParams, function (error, result,fields) {
                    if (error) {
                        console.log('Ocurrió un error');
                        //throw error;
                        reject(connection, error);
                    }
                    resolve(result);
                });
                connection.release();//release the connection
            });
        });
    },
    this.getConexionesAbiertas = function(){
        return new Promise(function(resolve,reject){
            var conexiones = mysql_pool._allConnections.length;
            console.log(conexiones);
            resolve();
        })
    }
}

module.exports = new ConexionMysql();