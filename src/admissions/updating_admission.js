async function main (req,res){
  
    const admission_id=req.query.admission_id;
    const student_id=req.query.student_id;
    // const course_id=req.query.course_id;

   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.admissions SET admission_id=$1 WHERE student_id = $2;`, [admission_id,student_id],async function(err,data){
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



