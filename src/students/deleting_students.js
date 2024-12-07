async function main (req,res){
    // const pg = require('pg');
    // // import pg from 'pg'
    // const { Client } = pg
    // const client = new Client({
    //     user: 'postgres',
    //     password: 'root',
    //     host: '127.0.0.1',
    //     port: 5432,
    //     database: 'Nitesh_db',
    //   })
       
    //   await client.connect()
    const id = req.query.id;
    // const name = req.query.name;
    // const city = req.query.city;
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM classmanagement WHERE id=$1;`, [id],async function(err,data){
              if(data){
                  res.send(' delete successfully');
              }
              else{
                  res.send(err);
                  console.log(err);
              }
              await client.end() 
          })
    
}
module.exports={
    main
}