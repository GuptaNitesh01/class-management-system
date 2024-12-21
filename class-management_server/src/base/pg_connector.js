const getPGConnection =async ()=>{
    const pg = require('pg');
// import pg from 'pg'
const { Client } = pg
const client = new Client({
    user: 'postgres',
    password: 'root',
    host: '127.0.0.1',
    port: 5432,
    database: 'classmanagement',
  })
   
  await client.connect()
  return client;
}
  module.exports={
    getPGConnection:getPGConnection
  }