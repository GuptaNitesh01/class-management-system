async function main (req,res){
    
    const {getPGConnection} = require("../base/pg_connector")
    const client =await getPGConnection();
    console.log("CLIENT",client)
    
       await client.query(`SELECT "staff_attendance_id","staff_id","date","course_id" FROM "staff_sttendance";`, [],async function(err,data){
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