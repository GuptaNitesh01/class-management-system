async function main (req,res){
   
    const admission_id=req.query.admission_id;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM admissions WHERE admission_id=$1;`, [admission_id],async function(err,data){
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