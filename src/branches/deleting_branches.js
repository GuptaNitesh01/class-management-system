async function main (req,res){
   
    const branch_id=req.query.branch_id;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM branches WHERE branch_id=$1;`, [branch_id],async function(err,data){
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