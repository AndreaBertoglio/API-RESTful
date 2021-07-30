const mysql = require ('mysql');
//Configurazioni per il db
const config = {
    host: 'localhost',
    user: 'andrea',
    password: 'bertoglio',
    database: 'api'
}; 
pool = mysql.createPool(config); 
module.exports = pool;