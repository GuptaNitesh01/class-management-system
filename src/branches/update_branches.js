async function main (req,res){
  
    const branch_id=req.query.branch_id;
    const branch_name=req.query.branch_name;
    // const course_id=req.query.course_id;

   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.subjects SET branch_id=$1 WHERE branch_name = $2;`, [branch_id,branch_name],async function(err,data){
              if(data){
                  res.send(data.rows);
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