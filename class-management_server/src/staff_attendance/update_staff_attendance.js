async function main (req,res){
  
    const staff_attendance_id = req.query.staff_attendance_id;
    const staff_id = req.query.staff_id;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.staff_attendance SET staff_attendance_id=$1 WHERE staff_id = $2;`, [staff_attendance_id,staff_id],async function(err,data){
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
  
  