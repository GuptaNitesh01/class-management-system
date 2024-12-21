async function main (req,res){
  
    const student_id = req.query.student_id;
    const exam_id = req.query.exam_id;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.courses SET student_id=$1 WHERE exam_id = $2;`, [student_id,exam_id],async function(err,data){
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
  
  