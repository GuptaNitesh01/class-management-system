async function main (req,res){
  
    const exam_id = req.query.exam_id;
    const exam_name = req.query.exam_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.exams SET exam_id=$1 WHERE exam_name = $2;`, [exam_id,exam_name],async function(err,data){
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
  
  