const mysql = require('mysql2/promise');
const con= require('../connectionObj');

async function query(sql) {
    const connection = await mysql.createConnection(con.db);
    const [results, ] = await connection.execute(sql);
    return results;
  }
  
  module.exports = {
    query
  }