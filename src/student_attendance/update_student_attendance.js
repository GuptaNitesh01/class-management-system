async function main (req,res){
  
    const student_attendance_id = req.query.student_attendance_id;
    const student_attendance_name = req.query.student_attendance_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.student_attendances SET student_attendance_id=$1 WHERE student_attendance_name = $2;`, [student_attendance_id,student_attendance_name],async function(err,data){
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
  
  