import mysql from 'mysql2';
import dotenv from 'dotenv';

const conn = mysql.createPool({
    connectionlist: 10,
    host: "localhost",
    user: "root",
    password: "Sen@iDev77!.",
    database: "livraria",
    port: 1400
})

export default conn