const mysql = require('mysql');

var ConexionMysql = function () {
    const options = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cuv'
    }

    //const connection = mysql.createConnection(options);
    this.execute = function (query, sqlParams) {
        return new Promise(function (resolve, reject) {
            const connection = mysql.createConnection(options);
            connection.connect(err => {
                if (err) {
                    console.error("No se pudo conectar a la base de datos");
                    reject();
                    //throw err;
                }
            });
            connection.query(query, (error, result, fields) => {
                if (error) {
                    console.log('Ocurrió un error');
                    //throw error;
                    reject(connection,error);
                }
                resolve(connection,result);
            });
        });
    }
}

module.exports = new ConexionMysql();